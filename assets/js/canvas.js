
 const canvasDimentions = (canvas) => {
	let dpr = window.devicePixelRatio           // device pixels per CSS pixel (can be fractional)
	let cssWidth = canvas.clientWidth           // CSS dimensions of canvas
	let cssHeight = canvas.clientHeight
	let pxWidth = Math.round(dpr * cssWidth)    // dimensions we should set the backing buffer to
	let pxHeight = Math.round(dpr * cssHeight)
	return {dpr, cssWidth, cssHeight, pxWidth, pxHeight}
  }

  const redraw = (canvas, draw) => {
	//   // DPI-corrected CSS dimensions
	//   let {dpr, cssWidth, cssHeight, pxWidth, pxHeight} = canvasDimentions(canvas)
	//   canvas.width = pxWidth
	//   canvas.height = pxHeight

	//   let context = canvas.getContext('2d')
	//   context.scale(dpr, dpr)
	//   // draw videos
	//   console.log("redraw", dpr)
	//   draw(canvas);
  }

  const debugCanvas = (context, videoElement) => {
	///console.log("debug", context, videoElement)
	context.fillStyle = "#000000";
	context.fillText  ("Duration:" + videoElement.duration,  10 ,280);
	context.fillText  ("Current time:" + videoElement.currentTime,  260 ,280);
	context.fillText  ("Loop: " + videoElement.loop,  10 ,290);
	context.fillText  ("Autoplay: " + videoElement.autoplay,  100 ,290);
	context.fillText  ("Muted: " + videoElement.muted,  180 ,290);
	context.fillText  ("Controls: " + videoElement.controls,  260 ,290);
	context.fillText  ("Volume: " + videoElement.volume,  340 ,290);

  }

  export { canvasDimentions, redraw, debugCanvas };