
		//获取前台元素
		var links=document.getElementById("sublime");
		
		links.onclick=function(){

			expression();
		}
		/**
		**	与点击事件绑定，获取前台输入的值
		**	并在内调用其他函数完成返回值
		*/

		function expression(){
			var text=document.getElementById("text").value;
			var patt=document.getElementById("patt").value;

			if(text){
			//以@分割前台的邮箱
			var n=text.split("@");
			var i=n.length;

			console.log(n[i-1]);
			//调用函数
			var  bag=getArr(arr,n[i-1]);

					}else{
				alert("请输入邮箱！");
				return false;
			}
			if(patt){
				var sub=exp(patt);
			}
			var timeGet=new Date().getTime();
			alert("欢迎"+n[0]+"!企业名："+bag+"\n"+sub+"\n当前时间戳:"+timeGet);
}

	/*
	**@cons() 与u本地数组邮箱后缀对应的公司,
	** @param vl 前面匹配到数组的下标
	*/


		function cons(vl){
			if (vl==0) {return "网易;";}
			if (vl==1) {return "腾讯;";}
			if (vl==2) {return "阿里云;";}
			if (vl==3) {return "新浪;";}
			if (vl==4) {return "139手机;";}
		}

/**
**	根据传入的数组和字符串，从数组中匹配，可以升级为只传入字符串，和本地数组做匹配
	@param arr 一个数组
	@param val 传入的字符串	
*/
		function getArr(arr,val){
			var i=arr.length;
			while(i--){
				if(arr[i]===val){
					//调用函数和本地库匹配
					var consLog=cons(i);
					return consLog;
				}
			}
			return "未匹配到";
		}
			
	/*	
	**	@param:本地数组常量;
	**	
	*/
	var arr = Array(
		"163.com",
		"qq.com",
		"aliyun.com",
		"sina.com",
		"139.com");
	/*
	**手机号正则匹配函数 
	*/
	function exp(str){
		var patt=new RegExp(/^1(3|5|7|8)\d{9}$/);
		var val=patt.test(str);
		if(val){
			return "手机号验证成功";
		}

		return "手机号格式有误";
	}


