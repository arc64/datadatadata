
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

export {supportedVideoFormat}