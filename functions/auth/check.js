/**
 * Cloudflare Pages Function: /auth/check
 * Proxies the auth check to the worker, forwarding the cookie.
 * Keeps everything on members.russperry.co so the browser sends the cookie.
 */

const AUTH_WORKER = 'https://cos-auth-worker.russ-2da.workers.dev';
const COOKIE_NAME = 'cos_session';

export async function onRequest(context) {
  const { request } = context;

  // Pull cookie from the Pages request (browser sent it here correctly)
  const cookie = request.headers.get('Cookie') || '';

  const res = await fetch(`${AUTH_WORKER}/auth/check`, {
    method: 'GET',
    headers: { 'Cookie': cookie },
  });

  const data = await res.json().catch(() => ({ authenticated: false, access: 'none' }));

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://members.russperry.co',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}
