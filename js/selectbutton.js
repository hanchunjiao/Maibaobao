$(function(){
			$("#div1").find("button").click(function(){
				//点击按钮的时候
				$("#div1").find("button").attr("class", "");
				$("#div1").find("div").css("display", "none");
				//设置当前点击的按钮和对应div
				$(this).attr("class", "active");
				$("#div1").find("div").eq($(this).index()).css("display", "block");
			})
})