//导航栏的手风琴效果
	$(function(){
			$("#guide").accordion({
				animate: 10,
				header: "h2",
			});
			//填充页面内容
			$.ajax({
				url:"data/new.json",
				type:"Get",
				success:function(res){
					var html="";
					for(var i=0;i<res.length;i++){
						html+='<li><div><img src="'+res[i].img+' " /></div><p>'+res[i].desc
						+'</p><span class="s1">'+res[i].price1+'</span><span class="s2">'+res[i].price2+'</span></li>';					
					}
					$(".goodlist #goodlist_content ul").html(html);
				}
			})

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

	})