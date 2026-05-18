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

  // Manually copy all headers (including Set-Cookie) to avoid silent drops
  const responseHeaders = new Headers();
  for (const [key, value] of res.headers.entries()) {
    responseHeaders.append(key, value);
  }

  return new Response(res.body, {
    status: res.status,
    headers: responseHeaders,
  });
}
