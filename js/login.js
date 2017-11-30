var arr = {username:"17854255351" , password:"hcj521"}
window.onload = function(){
	var submitbtn = document.getElementById("submitbtn");
	var userName = document.getElementById("userName");
	var passWord = document.getElementById("passWord");
	var userwarn = document.getElementById("userwarn");
	
	if ($_cookie("username")) {
		if ($_cookie("username")==arr.username&&$_cookie("password")==arr.password) {
			alert("自动登录成功");
			window.location.href='index.html';
		}
	}
	submitbtn.onclick = function(){
		if (userName.value==arr.username&&passWord.value==arr.password) {
			// alert("登录成功");
			$_cookie("username",userName.value,{expires:7});
			$_cookie("password",passWord.value,{expires:7});
			alert("登录成功");
			window.location.href='index.html';

		}else{
			alert("用户名密码有误");
		}
	}

	userName.onblur=function(){
		if (userName.value=="") {
			userwarn.innerHTML="请填写用户名!";
		}else if (!(userName.value==arr.username)){
			userwarn.innerHTML="该用户不存在!";
		}else{
			userwarn.innerHTML="";
		}
	}
}
