$(function(){
/*
*   自定义分割字符串
*/

    function split(string,string2){
        var arr=new Array();
        var str="";
        var b=0;
        arr[b]="";
        for(var i=0;i<string.length;i++){
            for(var a=0;a<string2.length;a++){
            if(string[i]==string2[a]){
                if(str!=""){
                arr[b]=str;
                b++;
                str="";
                }
                i++;
    
            }
    
        }
        if(string[i]){
            str+=string[i];
        }
        }
        if(str){
        arr[b]=str;
        }
        return arr;
    }
/*
* 传入时间戳，得到日期格式
*/
function time(data){
    data=Number(data);
    data=new Date(data);
     data=data.getFullYear()+"/"+(data.getMonth()+1)+"/"+data.getDate()+"   "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();
    return  data;
}

    //发送注册信息
$("#smt").click(function(){
    //两次输入密码验证
    var n=$(".useName").val();
    var a= $(".pswd").val();
    var b= $(".psw").val();
    var times=new Date().valueOf();
    if(a!=b){
        alert("两次输入的密码有误!")
        return false;
    }
    if(n.length==0||a.length==0){
        alert("输入不能为空");
        return false;
    }
    //发送post请求和账户密码
    $.ajax("127.0.0.1:3400",{
        type:"post",
        data:n+";"+b+";"+times+";",
        success:function(){
            alert("yes");
            $.get("http://localhost:3400//home/abcd/php/ajaxDown/test2copy/data.txt",function(data){
                $('.tableCon').html("");
                $('div.container').html("");
                data=split(data,";");
                //先搭建一行表头
                $(".tableCon").append("<tr class='row trRow'> <th class='col-md-4'  style='padding-left:14%'><h5>用户名</h5></th><th class='col-md-4' style='padding-left:14%'><h5>密码</h5></th><th class='col-md-4' style='padding-left:14%'><h5>注册时间</h5></th> </tr>");
                for( i=0;i<data.length;i=i+3){
                    if(((i+3)%3)==0 ){
                        data[i+2]=time(data[i+2]);
                    }
                    $('.tableCon').append(' <tr class="row trRow"><th class="col-md-4" style="padding-left:14%">'+data[i]+"</th><th class='col-md-4'  style='padding-left:4%'>"+data[i+1] +"</th><th class='col-md-4' style='padding-left:12%' > "+data[i+2]+"</th></tr>");
}
            })

        }
    })
})
//得到所有信息
$('#table').click(function(){

    // $.get("http://localhost:3300//home/abcd/php/ajaxDown/test2/data.txt",function(data){
    //     $('.tableCon').html("");
    //     data=split(data,";");
    //     //先搭建一行表头
    // $(".tableCon").append("<tr class='row trRow'> <th class='col-md-4'>用户名</th><th class='col-md-4'>密码</th><th class='col-md-4'>注册时间</th> </tr> ");
    //     for( i=0;i<data.length;i=i+3){
    //         if(((i+3)%3)==0 ){
    //             data[i+2]=time(data[i+2]);
    //         }
    //         $('.tableCon').append(' <tr class="row trRow"><th class="col-md-4">'+data[i]+"</th><th class='col-md-4'>"+data[i+1] +"</th><th class='col-md-4'>"+data[i+2]+"</th></tr>");
    //     }

    // })

})


//http://localhost:3300//home/abcd/php/ajaxDown/test2/data.txt
})