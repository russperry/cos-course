/**
 * Cloudflare Pages Function: /auth/verify
 * Calls the auth worker's /auth/validate endpoint (returns JSON),
 * then sets the session cookie directly on members.russperry.co.
 * This avoids the cross-domain Set-Cookie stripping issue.
 */

const AUTH_WORKER = 'https://cos-auth-worker.russ-2da.workers.dev';
const COOKIE_NAME = 'cos_session';
const COOKIE_TTL = 60 * 60 * 24 * 30; // 30 days

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Ask the worker to validate the token and return session info as JSON
  const validateUrl = `${AUTH_WORKER}/auth/validate${url.search}`;
  let data;

  try {
    const res = await fetch(validateUrl, { method: 'GET' });
    data = await res.json();
  } catch (e) {
    return Response.redirect(`${url.origin}/login?error=worker-unreachable`, 302);
  }

  if (!data.ok) {
    return Response.redirect(`${url.origin}/login?error=${data.error || 'invalid'}`, 302);
  }

  // Set cookie on the Pages domain and redirect to course
  return new Response(null, {
    status: 302,
    headers: {
      'Location': data.dest,
      'Set-Cookie': `${COOKIE_NAME}=${data.cookieValue}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${COOKIE_TTL}`,
    },
  });
}
