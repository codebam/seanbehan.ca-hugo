---
title: "Gaming"
date: 2022-10-9
---

{{< rawhtml >}}
<video id="video" autoplay="" controls="true" muted></video>
<script>
	if (Hls.isSupported()) {
		const video = document.getElementById('video');
		const hls = new Hls();
		hls.attachMedia(video);
		hls.on(Hls.Events.MEDIA_ATTACHED, () => {
			hls.loadSource('https://dash.seanbehan.ca/hls/stream.m3u8');
		});
	}

	video.play();
</script>
{{< /rawhtml >}}

{{< chat cactus-comments >}}
