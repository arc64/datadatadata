const acts = [
{
  src: "assets/videos/video-1.mp4",
  poster: "assets/videos/poster-1.png",
  loop: true,
  background: true,
  id: "actOneBackground",
  videos:  [
	{
	  src: "assets/videos/ACT1popup1neonbug.mp4",
	  poster: "assets/videos/poster-2.png",
	  loop: true,
	  id: "actOneForegroundOne",
	  // positions and width are a fraction of the window size
	  top: 1/8,
	  left: 1/8,
	  width: 1/8,
	  // in milliseconds from the start of the background video
	  startAt: 1000
	},
	{
	  src: "assets/videos/ACT1popup1neonbug.mp4",
	  poster: "assets/videos/poster-2.png",
	  loop: true,
	  id: "actOneForegroundTwo",
	  top: 1/8,
	  left: 5/8,
	  width: 1/8,
	  startAt: 3000
	},
	{
	  src: "assets/videos/caroshergood3.mp4",
	  poster: "assets/videos/poster-2.png",
	  loop: true,
	  id: "actOneForegroundThree",
	  top: 5/8,
	  left: 1/8,
	  width: 1/8,
	  startAt: 4000
	},
	{
	  src: "assets/videos/ACT1popup1neonbug.mp4",
	  poster: "assets/videos/poster-2.png",
	  loop: true,
	  id: "actOneForegroundFour",
	  top: 5/8,
	  left: 5/8,
	  width: 1/8,
	  startAt: 5000
	}
  ]
},
{
  src: "assets/videos/ACT1popup1neonbug.mp4",
  poster: "assets/videos/poster-2.png",
  loop: true,
  background: true,
  id: "actTwoBackground",
  videos:  [
	{
	  src: "assets/videos/caroshergood2.mp4",
	  poster: "assets/videos/poster-1.png",
	  loop: true,
	  id: "actTwoForegroundOne",
	  // positions and width are a fraction of the window size
	  top: 1/8,
	  left: 1/8,
	  width: 1/8,
	  // in milliseconds from the start of the background video
	  startAt: 1000

	},
	{
	  src: "assets/videos/caroshergood3.mp4",
	  poster: "assets/videos/poster-1.png",
	  loop: true,
	  id: "actTwoForegroundTwo",
	  top: 1/8,
	  left: 5/8,
	  width: 1/8,
	  startAt: 3000
	},
	{
	  src: "assets/videos/caroshermeta3.mp4",
	  poster: "assets/videos/poster-1.png",
	  loop: true,
	  id: "actTwoForegroundThree",
	  top: 5/8,
	  left: 1/8,
	  width: 1/8,
	  startAt: 4000
	},
	{
	  src: "assets/videos/ACT1popup1neonbug.mp4",
	  poster: "assets/videos/poster-1.png",
	  loop: true,
	  id: "actTwoForegroundFour",
	  top: 5/8,
	  left: 5/8,
	  width: 1/8,
	  startAt: 5000
	}
  ]
},
{
  src: "assets/videos/ACT1popup1neonbug.mp4",
  poster: "assets/videos/poster-2.png",
  loop: true,
  background: true,
  id: "actThreeBackground",
  videos:  [
	{
		src: "assets/videos/ACT1popup1neonbug.mp4",
		poster: "assets/videos/poster-2.png",
		loop: true,
		id: "actOneForegroundOne",
		// positions and width are a fraction of the window size
		top: 1/8,
		left: 1/8,
		width: 1/8,
		// in milliseconds from the start of the background video
		startAt: 1000
	  },
	  {
		src: "assets/videos/ACT1popup1neonbug.mp4",
		poster: "assets/videos/poster-2.png",
		loop: true,
		id: "actOneForegroundTwo",
		top: 1/8,
		left: 5/8,
		width: 1/8,
		startAt: 3000
	  },
	  {
		src: "assets/videos/caroshergood3.mp4",
		poster: "assets/videos/poster-2.png",
		loop: true,
		id: "actOneForegroundThree",
		top: 5/8,
		left: 1/8,
		width: 1/8,
		startAt: 4000
	  },
	  {
		src: "assets/videos/ACT!popup3glitch.mp4",
		poster: "assets/videos/poster-2.png",
		loop: true,
		id: "actOneForegroundFour",
		top: 5/8,
		left: 5/8,
		width: 1/8,
		startAt: 5000
	  }
  ]
}
];

const essayPath = "essay.html"

export {acts, essayPath}