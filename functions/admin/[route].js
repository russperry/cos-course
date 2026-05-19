/**
 * Cloudflare Pages Function: /admin/[route]
 * Proxies admin API calls to the worker, forwarding session cookie.
 * The worker verifies admin status via cookie (is_admin flag) or Bearer token.
 */
const AUTH_WORKER = 'https://cos-auth-worker.russ-2da.workers.dev';

export async function onRequest(context) {
  const { request, params } = context;
  const route  = params.route || '';
  const cookie = request.headers.get('Cookie') || '';

  const workerUrl = `${AUTH_WORKER}/admin/${route}${new URL(request.url).search}`;

  const res = await fetch(workerUrl, {
    method:  request.method,
    headers: {
      'Cookie':       cookie,
      'Content-Type': request.headers.get('Content-Type') || 'application/json',
    },
    body: ['POST', 'PUT', 'PATCH'].includes(request.method) ? request.body : undefined,
  });

  const data = await res.json().catch(() => ({}));

  return new Response(JSON.stringify(data), {
    status:  res.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
