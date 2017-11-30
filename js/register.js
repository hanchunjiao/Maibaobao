$(function(){
//手机号
	$("#telinput").focus(function(){
		$("#tel").text("请正确填写11位手机号码并验证");
	})
	$("#telinput").blur(function(){
		var oValue = this.value.replace(/\s/ig, "");
		this.value = oValue;
		if (isPoneAvailable(this.value)) {
			$("#tel").text("");
		}else{
			$("#tel").css("color","red");
			$("#tel").text("手机号码格式错误 请重新填写！");
		}
		
	})
//密码
	$("#passinput").focus(function(){
		$("#pass").text("请填写6-20位密码,可使用字母和数字组合");
	})
	$("#passinput").blur(function(){
		var oValue = this.value.replace(/\s/ig, "");
		this.value = oValue;
		if (isPasswordAvailable(this.value)) {
			$("#pass").text("");
		}else{
			$("#pass").css("color","red");
			$("#pass").text("格式错误,请使用6-20字母加数字或符号的组合！");
		}
		
	})
//确认密码
	$("#asureinput").focus(function(){
		$("#asure").text("请确认密码");
	})
	$("#asureinput").blur(function(){
		var oValue = this.value.replace(/\s/ig, "");
		this.value = oValue;
		if ( $("#asureinput").val()==$("#passinput").val() ){
			$("#asure").text("");
		}else{
			$("#asure").css("color","red");
			$("#asure").text("密码不一致！");
		}
		
	})


	$("#authcodeinput").focus(function(){
		$("#auth").text("请填写短信验证码");
	})
	$("#authcodeinput").blur(function(){
		$("#auth").text("");
	})

  //单击注册后
	$("#submitbtn").click(function(){
		//var a= confirm("注册成功,赶快去登录吧！");
		//if (a==true) {
			//window.location.herf="login.html";
		//}
		alert("注册成功！");
	
	})

		//手机号
	    function isPoneAvailable(str) {  
              var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
              if (!myreg.test(str)) {  
                  return false;  
              } else {  
                  return true;  
              }  
        }  
        //密码
        function isPasswordAvailable(str) {  
              var myreg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
              if (!myreg.test(str)) {  
                  return false;  
              } else {  
                  return true;  
              }  
        }  


})


