const replaceSite = async (response: Response, site: string) => {
  let text = await response.text();
  text = text.replace(/%SITE%/g, site);
  return new Response(text, { headers: response.headers });
};

export const onRequestGet = async (context: EventContext<any, any, any>) => {
  const url = context.request.url.replace(/\/privacy/g, "");
  const site = url.replace(/http[s]?:\/\//g, "");
  return fetch(`${url}/privacy.txt`).then((response) =>
    replaceSite(response, site)
  );
};
