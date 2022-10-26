export const onRequestGet = async (context: EventContext<any, any, any>) =>
  new Response(`${context.request.headers.get("x-real-ip")}\n`);
