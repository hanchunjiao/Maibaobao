$(function(){
//1
		$.ajax({
				url:"data/onef.json",
				type:"Get",
				success:function(res){
					var html="";
					for(var i=0;i<res.length;i++){
						html+='<li><div><img src="'+res[i].img+' " /></div><p><a href="#">'+res[i].desc
						+'</a></p><span>'+res[i].price1+'</span>&nbsp;&nbsp;<span class="line">'+res[i].price2+'</span></li>';			
					}
					$(".onef_goodlist ul").html(html);
				}

		})
//2
		$.ajax({
				url:"data/twof.json",
				type:"Get",
				success:function(res){
					var html="";
					for(var i=0;i<res.length;i++){
						html+='<li><div><img src="'+res[i].img+' " /></div><p><a href="#">'+res[i].desc
						+'</a></p><span>'+res[i].price1+'</span>&nbsp;&nbsp;<span class="line">'+res[i].price2+'</span></li>';					
					}
					$(".twof_goodlist ul").html(html);
				}
		})
//3
		$.ajax({
				url:"data/threef.json",
				type:"Get",
				success:function(res){
					var html="";
					for(var i=0;i<res.length;i++){
						html+='<li><div><img src="'+res[i].img+' " /></div><p><a href="#">'+res[i].desc
						+'</a></p><span>'+res[i].price1+'</span>&nbsp;&nbsp;<span class="line">'+res[i].price2+'</span></li>';					
					}
					$(".threef_goodlist ul").html(html);
				}
		})
//4
		$.ajax({
				url:"data/fourf.json",
				type:"Get",
				success:function(res){
					var html="";
					for(var i=0;i<res.length;i++){
						html+='<li><div><img src="'+res[i].img+' " /></div><p><a href="#">'+res[i].desc
						+'</a></p><span>'+res[i].price1+'</span>&nbsp;&nbsp;<span class="line">'+res[i].price2+'</span></li>';					
					}
					$(".fourf_goodlist ul").html(html);
				}
		})
//5
		$.ajax({
				url:"data/fivef.json",
				type:"Get",
				success:function(res){
					var html="";
					for(var i=0;i<res.length;i++){
						html+='<li><div><img src="'+res[i].img+' " /></div><p><a href="#">'+res[i].desc
						+'</a></p><span>'+res[i].price1+'</span>&nbsp;&nbsp;<span class="line">'+res[i].price2+'</span></li>';					
					}
					$(".fivef_goodlist ul").html(html);
				}
		})
//热门产品
		$.ajax({
				url:"data/hotgoodlist.json",
				type:"Get",
				success:function(res){
					var html="";
					for(var i=0;i<res.length;i++){
						html+='<li><div><img src="'+res[i].img+' " /></div></li>';					
					}
					$(".hot_goodlist ul").html(html);
				}
		})
//微信二维码的显示和隐藏
		$(".twocode .line2").mouseover(function(){
			$("#wechat").css("display","block");
		}).mouseout(function(){
			$("#wechat").css("display","none");
		})
//屏幕滚动高度的
		$(document).scroll(function(){
			// alert($(window).scrollTop());
			if ($(window).scrollTop() > 860) {
				$("#hide").css("display","block");
				$("#hide2").css("display","block");
			}else{
				$("#hide").css("display","none");
				$("#hide2").css("display","none");
			}
		})
//点击 回到顶部
		$("#hide").click(function(){
                $('body,html').animate({scrollTop:0},800);
                return false;
        });
  //底部二维码的显示与隐藏
  		$("#fixed .codeimg").hover(function(){
  			$(".codeimg_hover").css("display","block");
  		},function(){
  			$(".codeimg_hover").css("display","none");
  		})

})


				