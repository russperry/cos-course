/**
 * Cloudflare Pages Function: /auth/portal
 * Proxies Stripe billing portal session creation to the worker.
 */
const AUTH_WORKER = 'https://cos-auth-worker.russ-2da.workers.dev';
const COOKIE_NAME = 'cos_session';

export async function onRequest(context) {
  const { request } = context;
  const cookie = request.headers.get('Cookie') || '';

  const res  = await fetch(`${AUTH_WORKER}/auth/portal`, {
    method: 'GET',
    headers: { 'Cookie': cookie },
  });

  const data = await res.json().catch(() => ({ error: 'failed' }));

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
