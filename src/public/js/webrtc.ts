import WHEPClient from "./WHEPClient";

const player = new WHEPClient(
  "https://customer-nqr1cy6xpbbv13gu.cloudflarestream.com/817583bd076706ef81bc485f7dd4ec58/webRTC/play",
  document.querySelector("video")
);
