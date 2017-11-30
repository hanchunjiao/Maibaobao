//侧边栏实现代码+头部网页导航+主banner图下面的三张展示图  
$(function(){
	
//第一个
	$(".dl1").hover(function(){
			$("#slide_hover").css("display","block");

			$.ajax({
				url:"data/slidebar.json",
				type:"Get",
				success:function(res){
					var html="";
					html+='<p><a href="#">'+res[0].name+'</a></P>';
					$("#slide_hover .brand").html(html);

					var html1="";
					for(var i=0;i<res[0].images.length;i++){
						html1+='<div><img src=" '+res[0].images[i].url+' "/><div>';
					}
					html1=html+html1;
					$("#slide_hover .brand").html(html1);


					var html2="";
					html2+='<p><a href="#">'+res[1].name+'</a></P>';
					for(var i=0;i<res[1].goodlist.length;i++){
						html2+='<span><a href="#">'+res[1].goodlist[i].name+'</a><span>';
					}
					$("#slide_hover .hot").html(html2);


					var html3="";
					html3+='<p><a href="#">'+res[2].name+'</a></P>';
					for(var i=0;i<res[2].pricelist.length;i++){
						html3+='<span><a href="#">'+res[2].pricelist[i].name+'</a><span>';
					}
					$("#slide_hover .price").html(html3);

					
					var html4="";
					html4+='<p><a href="#">'+res[3].name+'</a></P>';
					for(var i=0;i<res[3].goodlist.length;i++){
						html4+='<span><a href="#">'+res[3].goodlist[i].name+'</a><span>';
					}
					$("#slide_hover .material").html(html4);


					var html5="";
					html5+='<p><a href="#">'+res[4].name+'</a></P>';
					for(var i=0;i<res[4].colorlist.length;i++){
						html5+='<span><a href="#">'+res[4].colorlist[i].name+'</a><span>';
					}
					$("#slide_hover .color").html(html5);


					var html6="";
					html6+='<p><a href="#">'+res[5].name+'</a></P>';
					for(var i=0;i<res[5].sizelist.length;i++){
						html6+='<span><a href="#">'+res[5].sizelist[i].name+'</a><span>';
					}
					$("#slide_hover .size").html(html6);
				}

			})
		},function(){
		  $("#slide_hover").css("display","none");
	})
//第2个
	$("#dl2").hover(function(){
			$("#slide_hover").css("display","block");

			$.ajax({
				url:"data/slidebar2.json",
				type:"Get",
				success:function(res){
					var html="";
					html+='<p><a href="#">'+res[0].name+'</a></P>';
					$("#slide_hover .brand").html(html);

					var html1="";
					for(var i=0;i<res[0].images.length;i++){
						html1+='<div><img src=" '+res[0].images[i].url+' "/><div>';
					}
					html1=html+html1;
					$("#slide_hover .brand").html(html1);


					var html2="";
					html2+='<p><a href="#">'+res[1].name+'</a></P>';
					for(var i=0;i<res[1].goodlist.length;i++){
						html2+='<span><a href="#">'+res[1].goodlist[i].name+'</a><span>';
					}
					$("#slide_hover .hot").html(html2);


					var html3="";
					html3+='<p><a href="#">'+res[2].name+'</a></P>';
					for(var i=0;i<res[2].pricelist.length;i++){
						html3+='<span><a href="#">'+res[2].pricelist[i].name+'</a><span>';
					}
					$("#slide_hover .price").html(html3);

					
					var html4="";
					html4+='<p><a href="#">'+res[3].name+'</a></P>';
					for(var i=0;i<res[3].goodlist.length;i++){
						html4+='<span><a href="#">'+res[3].goodlist[i].name+'</a><span>';
					}
					$("#slide_hover .material").html(html4);




					var html5="";
					html5+='<p><a href="#">'+res[4].name+'</a></P>';
					for(var i=0;i<res[4].colorlist.length;i++){
						html5+='<span><a href="#">'+res[4].colorlist[i].name+'</a><span>';
					}
					$("#slide_hover .color").html(html5);



					var html6="";
					html6+='<p><a href="#">'+res[5].name+'</a></P>';
					for(var i=0;i<res[5].sizelist.length;i++){
						html6+='<span><a href="#">'+res[5].sizelist[i].name+'</a><span>';
					}
					$("#slide_hover .size").html(html6);
				}

			})
		},function(){
		  $("#slide_hover").css("display","none");
	})
//第三个
	$("#dl3").hover(function(){
			$("#slide_hover").css("display","block");

			$.ajax({
				url:"data/slidebar3.json",
				type:"Get",
				success:function(res){
					var html="";
					html+='<p><a href="#">'+res[0].name+'</a></P>';
					$("#slide_hover .brand").html(html);

					var html1="";
					for(var i=0;i<res[0].images.length;i++){
						html1+='<div><img src=" '+res[0].images[i].url+' "/><div>';
					}
					html1=html+html1;
					$("#slide_hover .brand").html(html1);


					var html2="";
					html2+='<p><a href="#">'+res[1].name+'</a></P>';
					for(var i=0;i<res[1].goodlist.length;i++){
						html2+='<span><a href="#">'+res[1].goodlist[i].name+'</a><span>';
					}
					$("#slide_hover .hot").html(html2);


					var html3="";
					html3+='<p><a href="#">'+res[2].name+'</a></P>';
					for(var i=0;i<res[2].pricelist.length;i++){
						html3+='<span><a href="#">'+res[2].pricelist[i].name+'</a><span>';
					}
					$("#slide_hover .price").html(html3);

					
					var html4="";
					html4+='<p><a href="#">'+res[3].name+'</a></P>';
					for(var i=0;i<res[3].goodlist.length;i++){
						html4+='<span><a href="#">'+res[3].goodlist[i].name+'</a><span>';
					}
					 $("#slide_hover .material").html(html4);



					 $("#slide_hover .color").html("");

					 $("#slide_hover .size").html("");
				}

			})
		},function(){
		  $("#slide_hover").css("display","none");
	})

//第四个
	$("#dl4").hover(function(){
			$("#slide_hover").css("display","block");

			$.ajax({
				url:"data/slidebar4.json",
				type:"Get",
				success:function(res){
					var html="";
					html+='<p><a href="#">'+res[0].name+'</a></P>';
					$("#slide_hover .brand").html(html);

					var html1="";
					for(var i=0;i<res[0].images.length;i++){
						html1+='<div><img src=" '+res[0].images[i].url+' "/><div>';
					}
					html1=html+html1;
					$("#slide_hover .brand").html(html1);


					$("#slide_hover .hot").html("");


					$("#slide_hover .price").html("");

					$("#slide_hover .material").html("");

					$("#slide_hover .color").html("");

					$("#slide_hover .size").html("");
				}

			})
		},function(){
		  $("#slide_hover").css("display","none");
	})

	

		//网页导航hover出来的div
		$(".top_Wrap .top_r #webnav").mouseover(function(){
			$(".top_Wrap .top_r #webnav").css("background-color","#fff")
			$("#webnav_hover").css("display","block");
			$("#webnav_hover").css("background-color","#fff");
		});

		$(".top_Wrap .top_r #webnav").mouseout(function(){
			$(".top_Wrap .top_r #webnav").css("background-color","#f2f2f2")
			$("#webnav_hover").css("display","none");
			
		});
		

		//banner图下面的三张展示图片
		$.ajax({
				url:"data/three_img.json",
				type:"Get",
				success:function(res){
					var html="";
					for(var i=0;i<res.length;i++){
						html+='<img src=" '+res[i].img+' "/> ';		
					}
					$(".three_img").html(html);
				}
		})
		

	
})




