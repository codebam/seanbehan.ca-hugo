const replaceSite = async (
  response: Response,
  context: EventContext<any, any, any>
) => {
  let text = await response.text();
  let site = context.request.url.replace(/\/privacy/g, "");
  text = text.replace(/%SITE%/g, site);
  return new Response(text, { headers: response.headers });
};

export const onRequestGet = async (context: EventContext<any, any, any>) =>
  fetch(`${context.request.url}/privacy.txt`).then((response) =>
    replaceSite(response, context)
  );
