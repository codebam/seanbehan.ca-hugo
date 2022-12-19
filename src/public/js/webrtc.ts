import { SrsRtcPlayerAsync } from "./srs.sdk.js";

const video = document.querySelector("video");
const player = SrsRtcPlayerAsync();
window.pc = player.pc;
player.play("https://live.codebam.tv/live/livestream");
video.srcObject = player.stream;
