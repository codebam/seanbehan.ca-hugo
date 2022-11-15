import WHEPClient from "./WHEPClient";

const player = new WHEPClient(
  "https://live.seanbehan.ca/live/livestream",
  document.querySelector("video")
);
