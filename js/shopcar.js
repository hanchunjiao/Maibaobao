$(function(){
	
	sc_car();
	content();
	//var str = $.cookie("goods",1);
	function sc_car(){
		var str = $.cookie("goods");//取出的是字符串
		if(str){  //判断字符串是否存在
			var num = 0;
			num=Number(str)+num;
			$("#goodnumber").html(num);
			$("#goodnumber2").html(num);

			$("#priceall").html('￥'+ num*368+'.00');
			$("#priceall2").html('￥'+ num*368+'.00');
			$("#priceall3").html('￥'+ num*368+'.00');
		}
			
	}

	function content(){
		var str=$.cookie("goods");
		if (str==null) {
			var html = "您的购物车空空如也    <a href='women_bag.html''>立即选购>></a>";
			$(".register_Wrap .div2 .commo").html(html);
		}
	}


	$("#add").click(function(){	
		var first = $.cookie("goods") == null ? true : false;
		if (first) {
			$.cookie("goods",1, {expires: 7});
			$("#goodnumber").html(1);
			$("#goodnumber2").html(1);

			$("#priceall").html('￥'+ 368.00+'.00');
			$("#priceall2").html('￥'+ 368.00+'.00');
			$("#priceall3").html('￥'+ 368.00+'.00');

		}else{
			var content = $.cookie("goods");
			var numall=Number(content)+1;
			$.cookie("goods",numall, {expires: 7});
			$("#goodnumber").html(numall);
			$("#goodnumber2").html(numall);

			$("#priceall").html('￥'+ numall*368.00+'.00');
			$("#priceall2").html('￥'+ numall*368.00+'.00');
			$("#priceall3").html('￥'+ numall*368.00+'.00')

		}
	})

	$("#sub").click(function(){
		
		var first = $.cookie("goods") == null ? true : false;
		if (first) {
			$("#priceall").html('￥'+ 0 +'.00')

		}else{
			var content = $.cookie("goods");

			var numall=Number(content);
			if (numall>0) {
				numall=Number(content)-1;
			}
			
			$.cookie("goods",numall, {expires: 7});
			$("#goodnumber").html(numall);
			$("#goodnumber2").html(numall);

			$("#priceall").html('￥'+ numall*368.00+'.00');
			$("#priceall2").html('￥'+ numall*368.00+'.00');
			$("#priceall3").html('￥'+ numall*368.00+'.00');

		}
	})

	$("#del").click(function(){
		 var a = confirm("确定删除该商品吗？");
		 if (a==true) {
		 	$.cookie("goods",null, {expires: 7});
		 	location.reload();	
		 }
	})


})







