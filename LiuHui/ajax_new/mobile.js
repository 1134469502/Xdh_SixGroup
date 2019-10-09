
var fs=require('fs');


/*
* 自定义分割字符串
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



function getTable(){
    var data=fs.readFile("./data.txt",'utf-8',function(data){


        data=split(data,";");
        //先搭建一行表头
    $(".tableCon").append("<tr class='row trRow'> <th class='col-md-4'>用户名</th><th class='col-md-4'>密码</th><th class='col-md-4'>注册时间</th> </tr> ");
        for( i=0;i<data.length;i=i+3){
            if(((i+3)%3)==0 ){
                data[i+2]=time(data[i+2]);
            }
            $('.tableCon').append(' <tr class="row trRow"><th class="col-md-4">'+data[i]+"</th><th class='col-md-4'>"+data[i+1] +"</th><th class='col-md-4'>"+data[i+2]+"</th></tr>");
        }



    })
}