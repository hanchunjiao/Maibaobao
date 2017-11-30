//通过id获取元素结点
function $(id){
	return document.getElementById(id);
}
//彻底删除空白结点
function removeSpaceNode(parent){
	for (var i = parent.childNodes.length - 1; i >= 0; i--) {
		if(parent.childNodes[i].nodeType == 3 && /^\s+$/.test(parent.childNodes[i].nodeValue)){
			parent.removeChild(parent.childNodes[i]);
		}
	}
}
//随机生成n位的字母和数字组成的验证码
function authcode(n){
			var arr = [];
			for(i = 0 ; i < n ; i ++){
				var num = parseInt(Math.random() * 100);
				if(num >= 0 && num < 10){
					arr.push(num);
				}else if(num >= 65 && num <= 90){
					arr.push(String.fromCharCode(num));
				}else if(num >= 10 && num <= 35){
					arr.push(String.fromCharCode(num + 87));
				}else{
					i--;
					continue;
				}
			}
			return arr.join("");
}
//随机颜色
function randomColor(){
	return " rgba(" +parseInt(Math.random()*255)+ "," +parseInt(Math.random()*255)+ "," +parseInt(Math.random()*255)+ ",1) ";
}
//创建一个带文本的结点
function createNodeWithText(tagName , text){
	var node = document.createElement(tagName);
	var otext = document.createTextNode(text);
	node.appendChild(otext);
	return node;
}
//通过classname获取元素结点
function elementsByClassName(parentNode , className){
	var result = [];
	var nodes = parentNode.getElementsByTagName("*");
	for (var i = 0; i < nodes.length; i ++) {
		if (nodes[i].className == className) {
			result.push = (nodes[i]);
		}
	}
	return result;
}
//通过$(?)找到标签
function $(vArg){
	switch(vArg[0]){
		case "#":
			return document.getElementById(vArg.substring(1));
			break;
		case ".":
			return elementsByClassName(document,vArg.substring(1));
			break;
		default:
			var subStr = vArg.substring(0,5);
				if (subStr=="name=") {
					return document.getElementsByName(vArg.substring(5));
					}else{
/*通过标签名找到*/				return document.getElementsByTagName(vArg);
					}
			break;

			}
		}
//阻止事件冒泡兼容写法
function stopBubble(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}
//鼠标拖拽对象
function drag(node){
	//1、添加鼠标按下事件
	var offsetX = 0; //记录相对位置
	var offsetY = 0;
	node.onmousedown = function(ev){
		var e = ev || window.event;
		offsetX = e.clientX - node.offsetLeft;
		offsetY = e.clientY - node.offsetTop;
		//2、添加移动
		document.onmousemove = function(ev){
			var e = ev || window.event;
			//改变拖拽物体的坐标
			node.style.left = e.clientX - offsetX + "px";
			node.style.top = e.clientY - offsetY + "px";

		}

		//3、取消拖拽
		document.onmouseup = function(){
			document.onmousemove = null;
		}
	}
}

//添加事件，跨浏览器的兼容写法
function addEvent(obj, type, func){
	if(obj.addEventListener){
		obj.addEventListener(type, func, false);
	}else{
		obj.attachEvent("on" + type, func);
	}
}
//删除事件兼容写法
function removeEvent(obj, type, func){
	if(obj.removeEventListener){
		obj.removeEventListener(type, func);
	}else{
		obj.detachEvent("on" + type, func);
	}
}
//阻止事件默认行为
function preDefault(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		window.event.returnValue = false; //IE
	}
}
//拖拽原路返回
function dragBack(obj){
	var offsetX = 0;
	var offsetY = 0; //记录相对位置
	var arr = []; //存储坐标
	obj.onmousedown = function(ev){
		var e = ev || window.event;
		offsetX = e.clientX - this.offsetLeft;
		offsetY = e.clientY - this.offsetTop;

		document.onmousemove = function(ev){
			var e = ev || window.event;
			obj.style.left = e.clientX - offsetX + "px";
			obj.style.top = e.clientY - offsetY + "px";

			/*//进行画线,不停的去创建节点
			var node = document.createElement("div");
			node.style.width = "5px";
			node.style.height = "5px";
			node.style.backgroundColor = "black";
			node.style.position = "absolute";
			node.style.left = obj.offsetLeft + obj.offsetWidth / 2 + "px";
			node.style.top = obj.offsetTop + obj.offsetHeight / 2 + "px";

			//添加到body
			document.body.appendChild(node);*/

			//记录坐标
			arr.push({
				l: obj.offsetLeft + "px",
				t: obj.offsetTop + "px"
			})
		}

		document.onmouseup = function(){
			document.onmousemove = null;
			//原路返回，收集走过的坐标
			var timer = setInterval(function(){
				var frame = arr.pop();
				if(frame){
					obj.style.left = frame.l;
					obj.style.top = frame.t;
				}else{
					clearInterval(timer);
				}
			}, 20);
		}
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

		// 超级英雄=钢铁侠; X战警=金刚狼; 变种人=万磁王

		function removeCookie(name){
			document.cookie = encodeURIComponent(name) + "= ;expires=" + new Date(0);
		}




		function numOfDate(n){
			var d = new Date();
			var day = d.getDate();
			d.setDate(day + n);
			return d;
		}
		//alert(new Date(0)); //快速生成过去的时间
		// alert(numOfDate(-1));

		/*
			合并成一个
			$_cookie()
			$_cookie(name); getCookie
			$_cookie(name, null); 删除cookie
			$_cookie(name, value, json); setCookie
		*/

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
		
//碰撞检测
function crash(node1, node2){
			var l1 = node1.offsetLeft;
			var t1 = node1.offsetTop;
			var r1 = node1.offsetLeft + node1.offsetWidth;
			var b1 = node1.offsetTop + node1.offsetHeight;

			var l2 = node2.offsetLeft;
			var t2 = node2.offsetTop;
			var r2 = node2.offsetLeft + node2.offsetWidth;
			var b2 = node2.offsetTop + node2.offsetHeight;

			//肯定碰撞不了的条件
			if(!(r2 < l1 || l2 > r1 || b2 < t1 || t2 > b1)){
				return true;
			}else{
				return false;
			}
}
//运动
//json对象表示的是obj的各个目标属性集合
function startMove(obj, json, func){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){

		var bStop = true; //指示是否多个样式，都到达目的值

		for(var attr in json){/*iCur表示当前的属性值*/
			//1、获取当前值
			//透明度不一样，单独拎出来进行判断
			var iCur = null;
			if(attr == "opacity"){
				iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);/*getStyle取出的值是字符串，当属性为opacity时先转为浮点型乘以100，再转为整型*/
			}else{
				iCur =  parseInt(getStyle(obj, attr))
			}
		//设置速度为 (目标值-当前值)/8
			var speed = (json[attr] - iCur) / 8; 

			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


			//动画执行完成，关闭定时器，判断，其中有一个到达目的值，就关闭定时器。
			//【注】保证所有运动执行完成以后再关闭定时器。
		
			iCur += speed;
			if(attr == "opacity"){	
				obj.style.opacity = iCur / 100;
				obj.style.filter = "alpha(opacity=" + iCur + ");"
			}else{
				obj.style[attr] = iCur + "px";
			}

			if(iCur != json[attr]){
				bStop = false;
			}
		}


		//bStop为true的时候，是所有样式都到达目的值了
		if(bStop){
			clearInterval(obj.timer);
			if(func){
				func();
			}
		}


	}, 30);
}

//获取当前有效样式
function getStyle(element, attr){
	return element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element)[attr];
}
//判断字符串是否为数字，字母下划线组成
function isABC(charStr){
			if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr >= "0" && charStr <= "9" || charStr == "_"){
				return true;
			}else{
				return false;
			}
}
//ajax封装
function $_ajax(json){
			if(!json.method){
				json.method = "get";
			}
			if(!json.data){
				json.data = "";
			}

			ajax(json.method, json.url, json.data, json.success);
		}


		function ajax(method,url,data,success){
			var xhr = null;
			try{
				xhr = new XMLHttpRequest();
			}catch(error){
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}

			if (method == "get"&&data) {
				url += "?"+data;
			}
			xhr.open(method,url,true);

			if (method == "get") {
				xhr.send();
			}else{
				xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
				xhr.send(data);  //当时post方法时需要传数据
			}

			xhr.onreadystatechange = function(){
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						if (success) {
							success(xhr.responseText);
						}
					}
				}
			}
		}
		

