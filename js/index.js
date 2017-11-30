$(function(){
	sc_car();
	
	function sc_car(){
		var sc_str = $_cookie("goods");
		if(sc_str){ //判断字符串是否存在
			var sc_num = 0;
			sc_num = Number(sc_str) + sc_num;
			$(".zero").html(sc_num);
		}
	}

		//cookie
		function setCookie(name, value, json){
			var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
			if(json){
				if(json.expires instanceof Date){
					cookieText += ";expires=" + json.expires;
				}
				if(json.path){
					cookieText += ";path=" + json.path;
				}
				if(json.domain){
					cookieText += ";domain=" + json.domain;
				}
				if(json.secure){
					cookieText += ";secure";
				}
			}
			//设置cookie
			document.cookie = cookieText;
		}


		function getCookie(name){
			//1、取出存好的cookie
			var cookieText = decodeURIComponent(document.cookie);
			//2、找出键值对的位置
			var start = cookieText.indexOf(name);
			if(start == -1){
				return null;
			}else{
				var end = cookieText.indexOf(";", start);
				if(end == -1){
					//这是结尾
					end = cookieText.length;
				}
			}

			//3、将键值对提取出来
			var str = cookieText.substring(start, end);
			var arr = str.split("=");
			return arr[1];
		}

		function removeCookie(name){
			document.cookie = encodeURIComponent(name) + "= ;expires=" + new Date(0);
		}

		function numOfDate(n){
			var d = new Date();
			var day = d.getDate();
			d.setDate(day + n);
			return d;
		}

		function $_cookie(){
			//通过参数所传内容区分
			switch(arguments.length){
				case 1: //获取cookie
					return getCookie(arguments[0]);
					break;
				case 2:
					//1、删除cookie，如果第二个参数为null
					if(!arguments[1]){
						removeCookie(arguments[0]);
					}else{
						//2、设置cookie
						setCookie(arguments[0], arguments[1]);
					}
					break;
				default:
					//3、设置cookie  arguments[2] 必须是json对象
					setCookie(arguments[0], arguments[1], arguments[2]);
					break;
			}
		}


	//侧边栏静态内容
		$.ajax({
			url:"data/index.json",
			type:"Get",
			success:function(res){
			var html="";
			html+='<span class="iconfont icon-baozhuanhuan"></span><span><a href = "#">'+res[0].desc+'</a></span><span class="iconfont icon-jiantou-copy"></span>';					
			$(".dt1").html(html);

			html="";
			html+='<span class="iconfont icon-bao-copy"></span><span><a href = "#">'+res[1].desc+'</a></span><span id="arrow" class="iconfont icon-jiantou-copy"></span>';
			$(".dt2").html(html);

			html="";
			html+='<span class="iconfont icon-bao-copy"></span><span><a href = "#">'+res[2].desc+'</a></span><span class="iconfont icon-jiantou-copy"></span>';
			$(".dt3").html(html);

			html="";
			html+='<span class="iconfont icon-xiexuexiangbao"></span><span><a href = "#">'+res[3].desc+'</a></span><span class="iconfont icon-jiantou-copy"></span>';
			$(".dt4").html(html);

			html="";
			html+='<a href="#">'+res[0].g1+'</a><a href="#">'+res[0].g2+'</a><a href="#">'+res[0].g3+'</a><a href="#">'+res[0].g4+'</a><a href="#">'+res[0].g5+'</a>';
			$(".dd1").html(html);

			html="";
			html+='<a href="#">'+res[1].g1+'</a><a href="#">'+res[1].g2+'</a><a href="#">'+res[1].g3+'</a><a href="#">'+res[1].g4+'</a><a href="#">'+res[1].g5+'</a>';
			$(".dd2").html(html);

			html="";
			html+='<a href="#">'+res[2].g1+'</a><a href="#">'+res[2].g2+'</a><a href="#">'+res[2].g3+'</a><a href="#">'+res[2].g4+'</a>';
			$(".dd3").html(html);

			html="";
			html+='<a href="#">'+res[3].g1+'</a><a href="#">'+res[3].g2+'</a><a href="#">'+res[3].g3+'</a><a href="#">'+res[3].g4+'</a>';
			$(".dd4").html(html);
			}
		})


	//首页底部数据加载
		$.ajax({
			url:"data/bottom.json",
			type:"Get",
			success:function(res){
				var html = "";
				html +='<div class="twocode_1"><img src="'+res[0].images+'"></div><div class="twocode_2"><ul><li><a class="border_none" href="#"><span class="line1">'
				+res[1].text+'</span></a></li><li><a href="#"><span class="iconfont icon-weixin1 line2"></span></a></li><li><a href="#"><span class="iconfont icon-tengxunweibo line3"></span></a></li><li><a class="border_none" href="#"><span class="iconfont icon-xinlang line4"></span></a></li></ul></div>';
				$(".twocode").html(html);

				var html = "";
				html+='<ul><li><a href="#"><span class="iconfont icon-new letter"></span>&nbsp;<span>'+ res[3].text+' </span></a></li><li><a href="#"><span class="iconfont icon-dianzan-damuzhi letter"></span>&nbsp;<span>'
				+res[4].text+'</span></a></li><li><a href="#"><span class="iconfont icon-icon letter"></span>&nbsp;<span>'
				+res[5].text+'</span></a></li><li><a href="#" class="border_none"><span class="iconfont icon-weibiaoti101 letter"></span>&nbsp;<span>'
				+res[6].text+'</span></a></li></ul>';
				$(".bottombar").html(html);

				var html="";
				html+='<ul><li><p class="black"><a href="#">'+res[7].text[0].text1+'</a></p><p><a href="#">'
				+res[7].text[1].text2+'</a></p></li><li><p class="black"><a href="#">'
				+res[7].text[2].text3+'</a></p><p><a href="#">'
				+res[7].text[3].text4+'</a></p><p><a href="#">'
				+res[7].text[4].text5+'</a></p></li><li><p class="black"><a href="#">'
				+res[7].text[5].text6+'</a></p><p><a href="#">' 
				+res[7].text[6].text7+'</a></p></li><li><p class="black"><a href="#">'
				+res[7].text[7].text8+'</a></p><p><a href="#">'
				+res[7].text[8].text9+'</a></p></li><li><p class="black"><a href="#">'
				+res[7].text[9].text10+'</a></p><p><a href="#">'
				+res[7].text[10].text11+'</a></p><p><a href="#">'
				+res[7].text[11].text12+'</a></p><p><a href="#">'
				+res[7].text[12].text13+'</a></p></li><li><p class="black"><a href="#">'
				+res[7].text[13].text14+'</a></p><p><a href="#">'
				+res[7].text[14].text15+'</a></p><p><a href="#">'
				+res[7].text[15].text16+'</a></p><p><a href="#">'
				+res[7].text[16].text17+'</a></p></li><li class="border_none"><p class="black">'
				+res[7].text[17].text18+'</p><p class="num">'
				+res[7].text[18].text19+'</p><img src="'
				+res[7].text[19].text20+'"/></li></ul>';
				$(".bottomlist").html(html);

				var html ="";
				html+='<p>'+res[7].text[20].text21+'<a href="#">'+res[7].text[21].text22+'</a></p>';
				$(".text").html(html);

				var html="";
				html+='<span><a href="#">'+res[7].text[22].text23+'</a></span><span><a href="#">'
				+res[7].text[23].text24+'</a></span><span><img src="'+res[7].text[24].text25+
				'"></span><span><a href="#">'+res[7].text[25].text26+'</a></span>';
				$(".last").html(html);
			}

		})
		
})


