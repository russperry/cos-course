/**
 * Cloudflare Pages Function: /auth/magic-link
 * Proxies magic link requests to the worker.
 */
const AUTH_WORKER = 'https://cos-auth-worker.russ-2da.workers.dev';

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  const body = await request.text();

  const res = await fetch(`${AUTH_WORKER}/auth/magic-link`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });

  const data = await res.json().catch(() => ({ error: 'failed' }));

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
