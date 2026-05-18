/**
 * Cloudflare Pages Function: /auth/verify
 * Proxies magic link verification to the auth worker.
 * The worker sets the session cookie and redirects to the course.
 */

const AUTH_WORKER = 'https://cos-auth-worker.russ-2da.workers.dev';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Forward the full query string to the worker
  const workerUrl = `${AUTH_WORKER}/auth/verify${url.search}`;

  const res = await fetch(workerUrl, {
    method: 'GET',
    redirect: 'manual', // Let the worker's redirect pass through unchanged
  });

  // Pass worker response (including Set-Cookie + Location redirect) straight back
  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  });
}
