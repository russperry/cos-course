/**
 * Cloudflare Pages middleware — runs on every request to members.russperry.co
 * Gates access based on session cookie validated against cos-auth-worker KV.
 */

const AUTH_WORKER = 'https://cos-auth-worker.russ-2da.workers.dev';
const COOKIE_NAME = 'cos_session';
const LOGIN_PAGE = '/login.html';

// Public paths that never need auth
const PUBLIC_PATHS = [
  '/login.html',
  '/login',
  '/auth/',
  '/favicon.ico',
  '/robots.txt',
  '/_headers',
  '/_redirects',
];

// Access rules: which paths require which access level
const ACCESS_RULES = [
  { prefix: '/cos-course/', required: ['course', 'mastermind'] },
  { prefix: '/', required: ['mastermind'] },
];

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // Always allow public paths
  if (isPublicPath(path)) {
    return next();
  }

  // Always allow Russ (admin bypass via special cookie)
  const cookies = parseCookies(request.headers.get('Cookie') || '');
  const session = cookies[COOKIE_NAME];

  if (!session) {
    return redirectToLogin(url);
  }

  // Validate session with auth worker
  const authRes = await fetch(`${AUTH_WORKER}/auth/check`, {
    headers: { 'Cookie': `${COOKIE_NAME}=${session}` }
  });
  const authData = await authRes.json().catch(() => ({ authenticated: false, access: 'none' }));

  if (!authData.authenticated || authData.access === 'none') {
    return redirectToLogin(url);
  }

  // Check if this path is allowed for their access level
  const requiredAccess = getRequiredAccess(path);
  if (requiredAccess && !requiredAccess.includes(authData.access)) {
    // They're logged in but don't have the right access
    if (authData.access === 'course' && path.startsWith('/cos-course/')) {
      return next(); // Course purchaser can access course
    }
    return redirectToLogin(url, 'not-enrolled');
  }

  // Access granted — forward request
  const response = await next();

  // Inject user context header for client-side use
  const newResponse = new Response(response.body, response);
  newResponse.headers.set('X-User-Access', authData.access);
  newResponse.headers.set('X-User-Email', authData.email || '');
  return newResponse;
}

function isPublicPath(path) {
  return PUBLIC_PATHS.some(p => path === p || path.startsWith(p));
}

function getRequiredAccess(path) {
  for (const rule of ACCESS_RULES) {
    if (path.startsWith(rule.prefix)) return rule.required;
  }
  return null;
}

function redirectToLogin(originalUrl, error) {
  const loginUrl = new URL(LOGIN_PAGE, originalUrl.origin);
  loginUrl.searchParams.set('redirect', originalUrl.pathname);
  if (error) loginUrl.searchParams.set('error', error);
  return Response.redirect(loginUrl.toString(), 302);
}

function parseCookies(header) {
  const cookies = {};
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k) cookies[k.trim()] = v.join('=');
  }
  return cookies;
}
