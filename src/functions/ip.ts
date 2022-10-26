export default {
  fetch: (request: Request) =>
    new Response(`${request.headers.get("x-real-ip")}\n`),
};
