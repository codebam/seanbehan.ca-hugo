import { WebRTCPlayer } from "@eyevinn/webrtc-player";

const player = new WebRTCPlayer({
  video: document.querySelector("video"),
  type: "whep",
  statsTypeFilter: "^candidate-*|^inbound-rtp",
});

await player.load(
  new URL(
    "https://customer-nqr1cy6xpbbv13gu.cloudflarestream.com/817583bd076706ef81bc485f7dd4ec58/webRTC/play"
  )
);
