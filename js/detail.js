$(document).ready(function(){
	// sc_car();
	sc_car();
	$(".jqzoom").imagezoom();
	
	$("#thumblist li a").click(function(){
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		$(".jqzoom").attr('src',$(this).find("img").attr("mid"));
		$(".jqzoom").attr('rel',$(this).find("img").attr("big"));
	});

//购物车数字
	function sc_car(){
		var str = $_cookie("goods");//取出的是字符串
		if(str){  //判断字符串是否存在
			var num = 0;
			num=Number(str)+num;
			$("#zero").html(num);
		}
			
	}



//加入购物车按钮点击以后

	$("#collect").click(function(){
		var first = $_cookie("goods") == null ? true : false;
		if (first) {
			$_cookie("goods",1, {expires: 7});
			$("#zero").html(1);

		}else{
			var content = $_cookie("goods");
			var numall=Number(content)+1;
			$_cookie("goods",numall, {expires: 7});
			$("#zero").html(numall);

		}
	})
					
});


