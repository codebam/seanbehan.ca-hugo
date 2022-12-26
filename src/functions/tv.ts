async function modifyPage(response: Response) {
  const head_regex = /\<head\>(\s*[\s\S]*)?(?=\<\/head\>\s*)/gm;
  const head_tags_subst = `\<head\>$1<meta property="og:title" content="codebam.tv"><meta property="og:site_name" content="codebam.tv"><meta property="og:type" content="video.other"><meta property="og:image" content="https://codebam.tv/favicon.png">`;
  const head_adsense_subst = `\<head\>$1<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3287237463323384" crossorigin="anonymous"></script>`;
  const body_regex = /\<body\>(\s*[\s\S]*)?(?=\<\/body\>\s*)/gm;
  const body_adsense_subst = `\<body\>$1<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3287237463323384" crossorigin="anonymous"></script><ins class="adsbygoogle"style="display:block" data-ad-format="autorelaxed" data-ad-client="ca-pub-3287237463323384" data-ad-slot="9333721116"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`;
  const text = (await response.text())
    .replace(/Sean Behan\'s personal website/g, "codebam's livestream")
    .replace(/Sean Behan/g, "codebam.tv")
    .replace(/seanbehan\.ca\/gaming.html/g, "codebam.tv")
    .replace(/<title.*<\/title>/g, "<title>codebam.tv</title>")
    .replace(/<header.*<\/header>/g, "")
    .replace(/<footer.*<\/footer>/g, "")
    .replace(head_regex, head_tags_subst)
    .replace(head_regex, head_adsense_subst)
    .replace(body_regex, body_adsense_subst);
  return new Response(text, { headers: response.headers });
}

export const onRequestGet = async (context: EventContext<any, any, any>) => {
  const url = context.request.url.replace(/\/tv/g, "");
  return fetch(`${url}/gaming`).then(modifyPage);
};
