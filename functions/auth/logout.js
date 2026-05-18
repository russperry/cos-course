/**
 * Cloudflare Pages Function: /auth/logout
 */
const AUTH_WORKER = 'https://cos-auth-worker.russ-2da.workers.dev';

export async function onRequest(context) {
  const { request } = context;
  const cookie = request.headers.get('Cookie') || '';

  await fetch(`${AUTH_WORKER}/auth/logout`, {
    method: 'POST',
    headers: { 'Cookie': cookie },
  }).catch(() => {});

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `cos_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    },
  });
}
