
const supportedVideoFormat = (video) => {
	var returnExtension = "";
	if (video.canPlayType("video/mp4") == "probably" ||
		video.canPlayType("video/mp4") == "maybe") {
		  returnExtension = "mp4";
	  } else if(video.canPlayType("video/webm") =="probably" ||
		video.canPlayType("video/webm") == "maybe") {
		  returnExtension = "webm";
	} else if(video.canPlayType("video/ogg") =="probably" ||
		video.canPlayType("video/ogg") == "maybe") {
		  returnExtension = "ogg";
	}

	return returnExtension;
}


const createVideoEmbed = (video) => {
	let videoElement = document.createElement("video");

	if (video.background) {
		videoElement.muted = true;
		//videoElement.preload = "auto";
		// videoElement.autoplay = "autoplay";
	}

	videoElement.loop = true;
	videoElement.controls = true;
	// videoElement.playsinline = true;

	var videoType = supportedVideoFormat(videoElement);
	if (videoType == "") {
		//TODO: display better error messages
		alert("no video support");
		return;
	}

	videoElement.id = video.id;
	videoElement.src = video.src;
	videoElement.poster = video.poster;
	return videoElement;
}

export {supportedVideoFormat, createVideoEmbed}