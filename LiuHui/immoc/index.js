'use strict';
$(()=> {
    //---------点击隐藏链接--------------
        $("#input_text").click(function(){
            $(".search_a").attr("style","display:none");
            $(".search_input").attr({style:"border-bottom: 1px solid #F01414;"})
            $(".glyphicon-search").attr({style:"color:#F01414;"});
            $(".search_up").attr({style:" background:rgba(240, 20, 20, 0.4);"});
        })
        //----------失去焦点时还原------------
        $("#input_text").blur(function(){
            $(".search_a").attr("style","display:block");
            $(".search_input").attr({style:"border-bottom: 1px solid gainsboro;"});
            $(".glyphicon-search").attr({style:"color:#757a7e;"});
            $(".search_up").attr({style:" background:white;"});
        })
        //---------放大镜--------------
        $(".search_up").hover(function(){
            $(".glyphicon-search").attr({style:"color:#F01414;"});
            $(".search_up").attr({style:" background:rgba(240, 20, 20, 0.4);"});
        },function(){
            $(".glyphicon-search").attr({style:"color:#757a7e;"});
            $(".search_up").attr({style:" background:white;"});
        });
        /*------------------------------------------------------------------购物车下拉框部分--------------------------------------------------------*/
        //----------------弹出下拉框--------------------------
    $(".shop_a").hover(function (){
        $(".shop_nav").attr({style:"display:block"});
        $(".shop_a").attr({style:"color:#f01414"})
    },function(){
        $(".shop_nav").attr({style:"display:none"});
        $(".shop_a").attr({style:"color:#787d82"})
    });
    $(".shop_nav").hover(function (){
        $(".shop_nav").attr({style:"display:block"});
        $(".shop_a").attr({style:"color:#f01414"})
    },function(){

        $(".shop_nav").attr({style:"display:none"});
        $(".shop_a").attr({style:"color:#787d82"});
    });
    //---------------购物车动画--------------------
    $(".shop_nav .l").hover(function(){
        $(".shop_nav .l").attr({style:"background: rgba(240, 20, 20);"});
    },function(){
        $(".shop_nav .l").attr({style:"background: rgba(240, 20, 20, 0.8);"});
    })
//
        /*------------------------------------------------------------------下载APP下拉框部分--------------------------------------------------------*/
    //--------------------------下载app字体动画------------
    $(" .r #android_a").hover(function(){
        $(" .r #android_a").css("background","#07111b");
    },function(){
        $(" .r #android_a").css("background","#4D555D");
    })
    $(" .r #apple_a").hover(function(){
        $(" .r #apple_a").css("background","#07111b");
    },function(){
        $(" .r #apple_a").css("background","#4D555D");
    })
    //--------------------------------下拉框------------------------------
    //文字部分
    $("#down_app").hover(function(){
       // 显示内容
        $(".app_load").show();
        // 改变字体颜色
        $("#down_app_a").css('color', 'red');
    },function(){
           // 显示内容
           $(".app_load").hide();
           // 改变字体颜色
           $("#down_app_a").css('color', '#4D555D');
    });
    //框框部分
    $(".app_load").hover(function(){
        $("#down_app_a").css('color', '#4D555D');
    },function(){

    });


    /* _---------------------------------l轮播图左侧菜单栏 --------------------*/
    //遍历自定义属性data-id 来写hover事件
    //全局变量一个定时器

    var a=$(".content_left div[data-id]").length;
    for(let i=1;i<=a;i++){
        $('.content_left div[data-id=item-'+i+']').hover(function(){
            $('.content_left div[data-id=item-'+i+']').attr({style:"background:rgba(255,255,255,0.3)"});
            $('.content_left div[data-id=item-'+i+'] a').attr({style:"color: #fff"});
            $('.content_left div[data-id=items-'+i+']').css("display"," block");
            // $('.content_left div[data-id=items-'+i+']').css("display"," none");
            // ('.content_left div[data-id=items-'+i+']').stop(true);
        },function(){
            $('.content_left div[data-id=item-'+i+']').attr({style:"background:#2b333b"});
            $('.content_left div[data-id=item-'+i+'] a').css("color"," rgba(245, 239, 239, 0.719)");
            // alert("109"+i);
            $('.content_left div[data-id=items-'+i+']').css("display"," none");
        })
        $('.content_left div[data-id=items-'+i+']').hover(function(){
            $('.content_left div[data-id=items-'+i+']').css("display"," block");
        },function(){
            $('.content_left div[data-id=items-'+i+']').css("display"," none");
        })
    }




    //弹出div盒子    内的所有超链接 的移动效果
    var b=$(".content_up .up_text a").length;
    for(let i=0;i<b;i++){
        $(".content_up .up_text a:eq("+i+")").hover(function(){
            $(".content_up .up_text a:eq("+i+")").attr({style:"color:#f01414"});
        },function(){
            $(".content_up .up_text a:eq("+i+")").attr({style:"color:#4D555D"});
        })
    }
    //小红点  遍历所有菜单栏中的a ，拼接对应的事件
    for(let i=0;i<$(".one_under_four a").length;i++){
    $(".one_under_four   .a_"+i).hover(function(){
        $(".one_under_four   .a_"+i+" .course_card_dot").attr({style:"color:#f01414 "});
    },function(){
        $(".one_under_four   .a_"+i+" .course_card_dot").attr({style:"color:#4D555D "});
    })
    };
    //--------------------------------------------------轮播图下侧-----------------------------------------
    //使用了:eq方法
    var r_un=$(".content_r_a").length;
    for(let c=0;c<r_un;c++){
        $(".content_right_down a:eq("+c+")").hover(function(){
            //上浮
            $(".content_right_down a:eq("+c+")").css("margin-top","-4px");
        },function(){
            //返回初始值
            $(".content_right_down a:eq("+c+")").css("margin-top","0px");
        })
    };
    //主要內容的砖块特效
    // alert(( ".content_under>.under_a").length);
    for(let i=0;i<$( ".content_under .under_a").length;i++){
        $(".content_under .under_a:eq("+i+")").hover(function(){
            $(".content_under .under_a:eq("+i+")>.p_bold").css("color","#F20D0D");
        },function(){
            $(".content_under .under_a:eq("+i+")>.p_bold").css("color","#07111B");
        })
    }
    //--------------------------------------------------------------------尾部卡片栏动画效果-------------------------------------------------------------
    //热门话题
    $(".content_green  .title").hover(function(){
        $(".content_green .title").css("color","rgba(0, 180, 60, 0.8)");
    },function(){
        $(".content_green .title").css("color","rgba(0, 180, 60, 0.6)");
    })
    $(".content_green .bottom_info a").hover(function(){
        $(".content_green .bottom_info a").css("color","rgba(0, 180, 60, 0.8)");
    },function(){
        $(".content_green .bottom_info a").css("color","rgba(0, 180, 60, 0.6)");
    });
    //手记文章
    for (var i=0;i<$(".notes .content_blue .title").length;i++){
        $(".notes .content_blue:eq("+i+") .title" ).hover(function(){
            $(".notes .content_blue:eq("+i+")  .title" ).css("color","#07111B");
        });
    };
    //最下侧卡片
    // console.log($(" .some div:eq(1)"));//第二个框框
    console.log($(" .some_card .some:eq(1)"));
    console.log($(" .some_card .some:eq(1)>img"));
    $(" .some_card .some:eq(1)>img").hover(function () {

    })

    for (let img = 0; img < $(".some_card .some").length; img++) {
        $(".some:eq(" + img + ")").hover( ()=> {
            //将事件写进队列
            var color = $(" .some_card .some:eq(" + img + ")>div").css("backgroundColor");
            var interval2 = setInterval(()=> {
                $(" .some_card .some:eq(" + img + ")>div").css("display", "block");
                $(" .some_card .some:eq(" + img + ")>div").css("opacity", 1);
                $(" .some_card .some:eq(" + img + ")>img").css("border-color", color);
                //清除
                clearInterval(interval2);
            },100);
        }, ()=>{
            let val = 1;
            var interval = setInterval(()=> {
                val = val - 0.3;
                $(" .some_card .some:eq(" + img + ")>div").css("opacity", val);
                //如果值小于0，则隐藏代码块，同时将定时器关掉
                if (val <= 0) {
                    $(" .some_card .some:eq(" + img + ")>div").css("opacity", 0);
                    $(" .some_card .some:eq(" + img + ") div").css("display", "none");
                    $(" .some_card .some:eq(" + img + ")>img").css("border-color", "white");
                    //清除定时器
                    clearInterval(interval);
                }
            }, 110);
        })
    }


    //下侧轮播图动画效果
    //右按钮
    $("a[data-id='l']").click(()=>{
        //判断出初始值 第一个！！！
        if($("div[data-id=1]").css("left")=="0px"&&$("div[data-id=2]").css("left")=="1142px"){
            $("div[data-id=1]").css({"left":"1142px"});
            $("div[data-id=2]").hide().animate({"left":"-1142px"},10,()=>{
                $("div[data-id=2]").show().animate({"left":"0px"},5);
            });
            // setInterval(() => {
            //     $("div[data-id=2]").show().animate({"left":"0px"},0);
            // },0);
            return;
        }
        //判断位置，进行操作 第二个！！！！
        if($("div[data-id=1]").css("left")=="1142px"&&$("div[data-id=2]").css("left")=="0px"){
            $("div[data-id=1]").hide().animate({"left":"-1142px"},1,()=>{
                $("div[data-id=2]").animate({"left":"1142px"},5,()=>{
                    $("div[data-id=1]").show().animate({"left":"0px"},2);
                });
            });
            //必须放在定时器内，否则会跳过上一行，直接运行;
            // setTimeout(()=>{
            //     $("div[data-id=1]").show().animate({"left":"0px"},3);
            //     return;
            // },5);
            return;
        }
        //第三个！！
        if($("div[data-id=1]").css("left")=="-1142px"&& $("div[data-id=2]").css("left")=="0px"){
            $("div[data-id=2]").animate({"left":"1142px"},3);
            $("div[data-id=1]").animate({"left":"0px"},3);
        }
        //第四个
        if($("div[data-id=1]").css("left")=="0px"&& $("div[data-id=2]").css("left")=="-1142px"){
            $("div[data-id=1]").animate({"left":"1142px"},3,()=>{
                $("div[data-id=2]").animate({"left":"0px"},2);
            });
        }
})
//左侧按钮 思路：判断当前每一个按钮的状态来进行操作
$("a[data-id='r']").click(()=>{
    //初始值
    if($("div[data-id=1]").css("left")=="0px"&&$("div[data-id=2]").css("left")=="1142px"){
        $("div[data-id=1]").animate({"left":"-1142px"},5);
        $("div[data-id=2]").hide().css({"left":"1142px"});
        setTimeout(() => {
            $("div[data-id=2]").show().animate({"left":"0px"},3);
        }, );
        return;
    }
    if($("div[data-id=1]").css("left")=="-1142px"&&$("div[data-id=2]").css("left")=="0px"){
        $("div[data-id=1]").hide().css("left","1142px");
        $("div[data-id=2]").animate({"left":"-1142px"},3);
        setTimeout(() => {
            $("div[data-id=1]").show().animate({"left":"0px"},3);
        }, 5);
    }
    if($("div[data-id=1]").css("left")=="0px"&& $("div[data-id=2]").css("left")=="-1142px"){
        $("div[data-id=1]").animate({"left":"-1142px"},3);
        $("div[data-id=2]").hide().css("left","1142px");
        setTimeout(() => {
            $("div[data-id=2]").show().animate({"left":"0px"},3);
        }, 5);
    }
    if($("div[data-id=1]").css("left")=="-1142px"&& $("div[data-id=2]").css("left")=="0px"){
        $("div[data-id=1]").hide().animate({"left":"0px"},1);
        $("div[data-id=2]").animate({"left":"1142px"},3);
    }
    if($("div[data-id=2]").css("left")=="0px"&&$("div[data-id=1]").css("left")=="1142px"){
        $("div[data-id=1]").hide().css({"left":"1142px"});
        $("div[data-id=2]").animate({"left":"-1142px"},3,()=>{
        $("div[data-id=1]").show().animate({"left":"0px"},2);
        return;
        })
    }
})

//返回顶部
$(".top").click(()=>{
    //先得到当前坐标
    var top = document.documentElement.scrollTop;
    var interval=setInterval(() => {
        if(top<=0){
            clearInterval(interval);
        }else{
        //设置坐标
        window.scrollTo(0,top);
        top=top-100;
    }
}, 10);
})
//swiper
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay:true,
    loop: true,
    slidesPerView : 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
});