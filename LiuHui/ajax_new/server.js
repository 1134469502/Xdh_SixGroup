/*
*一个服务中不能有两个end? data响应，否则会报错
*/

// var  mobile=require('mobile.js');
var http=require('http');
var fs=require('fs');
var path=require('path');
var url=require('url');
var crypto=require('crypto');
const hash=crypto.createHash('sha256');
var data;

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



//异步写入文件
function writeData(data){
    console.log("in writedata");
    const hash=crypto.createHash('sha256');
    data=data.toString();
    data=split(data,";");
    data[1]=hash.digest(data[1]);
    data[1]=data[1].toString('base64');
    data=data.join(";");
    data=data+";";
    fs.writeFile('./data.txt',data,{
        //追加模式，不覆盖
        flag:'a'  
    },function(err){
        if(err){
            console.log("Error!::::::"+err);
        }
    })
}


//创建服务器
var server=http.createServer(function(request,response){


//获取请求url中的地址
        var filepath=url.parse(request.url).pathname;
        // console.log(filepath);
        //判断文件是否存在且不报错
        fs.stat(filepath,function(err,stats){
            if(!err && stats.isFile()){
                console.log("200"+request.url);
                response.writeHead(200,{"content-type":"text/html","charset":"utf-8"});
                // {"content-type":"text/html","charset":"utf-8"}
                //将文件导入响应中
                fs.createReadStream(filepath).pipe(response);
                // response.end();
            }else{
                console.log("404"+request.url);
                response.writeHead(404);
                response.end("404 NOT FOUND!");
            }
        })

        request.on('data',function(data){
            console.log("yesdata");
            writeData(data);
            response.writeHead(200);
            response.end();
    });
});

server.listen(3400);
console.log("ok");




