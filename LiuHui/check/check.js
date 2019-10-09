		
	//<<<<<<<<<<<<<<<<<<------屎山------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	/*
	* 	点击数字切换图片
		切换图片的src为href的链接	
	*/
	window.links=document.getElementById("clj").getElementsByTagName("a");
	window.imgLinks=document.getElementsByClassName("yuan");
	var cons=0;
	for(var i=0;i<links.length;i++){
		links[0].onclick=function(){
			showpic(this);
			//showimg2(cons);
			showimg(0);
			cons=0;
			return false;
		}
		links[1].onclick=function(){
			showpic(this);
			//showimg2(cons);
			showimg(1);
			cons=1;
			return false;
		}
		links[2].onclick=function(){
			showpic(this);

			showimg(2);
			cons=2;
			return false;
		}
		links[3].onclick=function(){
			showpic(this);

			showimg(3);
			cons=3;
			return false;
		}
		links[4].onclick=function(){
			showpic(this);

			showimg(4);
			cons=4;
			return false;
		}
	}


	function showpic(witchpic){
		var source=witchpic.getAttribute("href");
		var picture=document.getElementById("picture");
		picture.setAttribute("src",source);
	}


/*-------------------------------------------------------------------------------------------------------------------------*/
	/*
	*切换上一张下一张
	*/
	var imgs=document.getElementById("next").getElementsByTagName("a");
	//	window.cos=0;
		var conster=0;
			imgs[1].onclick=function(){
				cons++;
				if(cons==5){
					cons=0;
				}
				showpic(links[cons]);

				showimg(cons);
				//删减后无影响
				// conster=cons;
				// if(cons==5){
				// 	cons=0;
				// }
				return false;
			}
			imgs[0].onclick=function(){
				cons--;
				if(cons==-1){
					cons=4;
				}
				showpic(links[cons]);

				showimg(cons);
				conster=cons;
				// if(cons==0){
				// 	cons=5;
				// }
				return false;
			}


/*----------------------------------------------------------------------------------------------------------------------*/
		
	/*
	*两种写法都ok,自动切换图片
	*/
	window.imgLinks=document.getElementById("clj").getElementsByTagName("img");
/*	window.a=0;
	window.b=0;*/
	showimg(cons);
	var myVar=setInterval(function(){time()},3000);
	function time(){
		var source=links[cons].getAttribute("href");
		var picture=document.getElementById("picture");
		picture.setAttribute("src",source);
		showimg(cons);
		b=cons;

		if(cons==4){
			cons=-1;
		}
		cons++;
	}
	function showimg(witchimg){
		for(var i=0;i<links.length;i++){
		imgLinks[i].setAttribute("src","/home/abcd/图片/kongxin.jpg");
		}
		 imgLinks[witchimg].setAttribute("src","/home/abcd/图片/shixin.jpg");
}



/*------------------------------------------------------------------------------------------------------------*/

	
	/*//圆点点击
	window.imgLinks=document.getElementsByClassName("yuan");
	var clean;
	for(var i=0;i<imgLinks.length;i++){

		imgLinks[i].onclick=function(){
			showimg(this);
			if(clean){
				showimg2(clean);
				return false;
			}else{
			clean=imgLinks[i];
			return false;
			}
		}
	//	clean=imgLinks[i];
	//}
		function showimg(witchimg){
			
			witchimg.setAttribute("src","/home/abcd/图片/shixin.jpg");
		}

		function showimg2(witchimg){
			witchimg.setAttribute("src","/home/abcd/图片/kongxin.jpg");
		}*/


/*	window.b=0;
	var myVar2=setInterval(function(){time2()},4000);
	function  time2(){
		var imgSource=imgLinks[b];
		imgSource.setAttribute("src","/home/abcd/图片/kongxin.jpg");
		b++;
		if(b==5){
			b=0;
		}
	}*/

/*	links2=document.getElementById("next").getElementsByTagName("a");
		window.b=0;
		for(b =0;b<links2.length;b++){
		links2[b].onclick=function{
		var links=document.getElementById("clj").getElementsByTagName("a");
		var source=links.getAttribute("href");
		var picture=document.getElementById("picture");
		picture.setAttribute("src",source);
		}

}*/
/*	window.a=1;
	var myVar=setInterval(function(){time()},4000);
	function time(){
		var b=document.getElementById("picture").setAttribute("src","/home/abcd/图片/"+window.a+".jpg");
		a++;
		if(a==6){
 			a=1;
			}
		}
*/

/*	var links2=document.getElementById("next").getElementsByTagName("a");
		alert(links2);
		window.b=0;
		links2[b].onclick=function{
		var source2=links2[b].getAttribute("href");
		var picture2=document.getElementById("picture");
		picture2.setAttribute("src",source2);
		b++;
		if(b==5){
			b=0;
		}
}*/



	/*
	*图片点击切换
	*/

/*	var links2=document.getElementById("next").getElementsByTagName("a");
		alert(links2);
		window.b=0;
		links2[b].onclick=function{
		var source2=links2[b].getAttribute("href");
		var picture2=document.getElementById("picture");
		picture2.setAttribute("src",source2);
		b++;
		if(b==5){
			b=0;
		}
}*/
