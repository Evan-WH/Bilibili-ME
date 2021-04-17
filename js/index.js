// popover提示框
$(function() {
	$('#app').popover({
		trigger: 'hover',
		html: true,
		content: "<img src='img/sao.png'><br><span>&nbsp&nbsp&nbsp扫码下载手机客户端</span>"
	});
})
// 图片拉伸效果
$(function() {
	$("#one_1").find(".info").hide()
	$("#one_2").find(".info").hide()
	$("#one_3").find(".info").hide()
	$("#one_4").find(".info").hide()
	$("#one_5").find(".info").hide()
	$("#one_6").find(".info").hide()
	$("#one_1").mouseover(function() {
		$("#one_2").find(".info").slideUp()
		$("#one_3").find(".info").slideUp()
		$("#one_4").find(".info").slideUp()
		$("#one_5").find(".info").slideUp()
		$("#one_6").find(".info").slideUp()
		$(this).find(".info").slideDown()
	})
	$("#one_2").mouseover(function() {
		$("#one_1").find(".info").slideUp()
		$("#one_3").find(".info").slideUp()
		$("#one_4").find(".info").slideUp()
		$("#one_5").find(".info").slideUp()
		$("#one_6").find(".info").slideUp()
		$(this).find(".info").slideDown()
	})
	$("#one_3").mouseover(function() {
		$("#one_1").find(".info").slideUp()
		$("#one_2").find(".info").slideUp()
		$("#one_4").find(".info").slideUp()
		$("#one_5").find(".info").slideUp()
		$("#one_6").find(".info").slideUp()
		$(this).find(".info").slideDown()
	})
	$("#one_4").mouseover(function() {
		$("#one_1").find(".info").slideUp()
		$("#one_2").find(".info").slideUp()
		$("#one_3").find(".info").slideUp()
		$("#one_5").find(".info").slideUp()
		$("#one_6").find(".info").slideUp()
		$(this).find(".info").slideDown()
	})
	$("#one_5").mouseover(function() {
		$("#one_1").find(".info").slideUp()
		$("#one_2").find(".info").slideUp()
		$("#one_3").find(".info").slideUp()
		$("#one_4").find(".info").slideUp()
		$("#one_6").find(".info").slideUp()
		$(this).find(".info").slideDown()
	})
	$("#one_6").mouseover(function() {
		$("#one_1").find(".info").slideUp()
		$("#one_2").find(".info").slideUp()
		$("#one_3").find(".info").slideUp()
		$("#one_4").find(".info").slideUp()
		$("#one_5").find(".info").slideUp()
		$(this).find(".info").slideDown()
	})
	$("#slidershow2").mouseover(function() {
		$("#one_1").find(".info").slideUp()
		$("#one_2").find(".info").slideUp()
		$("#one_3").find(".info").slideUp()
		$("#one_4").find(".info").slideUp()
		$("#one_5").find(".info").slideUp()
		$("#one_6").find(".info").slideUp()
	})
})
$(function() {
	$("#img4").find("div").find("img").click(function() {
		window.location.href = "video.html"
	})
	$("#img4").find("div").find("img").mouseover(function() {
		$(this).css("opacity","0.5")
	})
	$("#img4").find("div").find("img").mouseout(function() {
		$(this).css("opacity","1")
	})
})
// 视频播放跳转
$(function() {
	$("#one_1").find(".info").click(function() {
		window.location.href = "video.html"
	})
	$("#one_2").find(".info").click(function() {
		window.location.href = "video.html"
	})
	$("#one_3").find(".info").click(function() {
		window.location.href = "video.html"
	})
	$("#one_4").find(".info").click(function() {
		window.location.href = "video.html"
	})
	$("#one_5").find(".info").click(function() {
		window.location.href = "video.html"
	})
	$("#one_6").find(".info").click(function() {
		window.location.href = "video.html"
	})
	$("#head").click(function() {
		window.location.href = "user.html"
	})
	$("#zx").click(function() {
		window.location.href = "user.html"
	})
})
