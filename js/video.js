const nextControl = new Super.NextControl()
const Dbspeen = new Super.DbspeenControl()
const BarrageControl = new Super.BarrageControl()
const fullScreenControl = new Super.FullScreenControl()
const video = new Super.Svideo('videoContainer', {
	source: new Super.VideoSource({
		src: './video/one.mp4'
	}),
	leftControls: [nextControl],
	rightControls: [Dbspeen, fullScreenControl],
	centerControls: [BarrageControl]
})
video.addEventListener('change', (event) => {
	//  console.log(event)
})
nextControl.addEventListener('click', () => {
	alert('click next menu !!!')
})
fullScreenControl.addEventListener('fullscreen', () => {
	console.log('is fullscreen !!!')
	$("#navigation").hide()
	$("#text").hide()
	$("#text2").hide()
})
fullScreenControl.addEventListener('cancelfullscreen', () => {
	console.log('cancel fullscreen !!!')
	$("#navigation").show()
	$("#text").show()
	$("#text2").show()
})
video.addEventListener('fullscreen', () => {
	console.log('is fullscreen !!!')
})
video.addBarrage(new Super.Barrage('第六组实训项目弹幕', {
	color: 'red',
	fontSize:'30px',
}))
video.addBarrage('第六组~~~~~~')
video.addBarrage('针不戳！！！！！！')