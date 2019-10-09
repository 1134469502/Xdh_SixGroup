// var net=require('net');
// //用来 收集保存客户端socket 
//  ServerList=[];
// var server=net.createServer(function(socket){
//     //连接 成功
//     socket.write("Welcome to IT xdl");
//     //将socket 收集
//     ServerList.push(socket);
//     socket.on('data',function(data){
//         //广播，并客户端发送消息在服务端显示出来
//         BroadCast(data);
//         socket.write(data);
//         console.log("socket write data:"+data);
//     })
// socket.on('end',function(){
//     console.log("END socket"+socket.toString());
//     //客户端退出聊天室删除对应的socket，避免服务端卡下
//     ServerList.splice(ServerList.indexOf(socket));
// })
// socket.on('error',function(err){
//     console.log("socket Error:"+err);
// })
// })
// server.listen(8080,'127.0.0.1');
// //广播函数
// function BroadCast(data){
//     for(var i=0;i<ServerList.length;i++){
//         ServerList[i].write("function BroadCast :"+data);
//     }
// }


var net=require('net');
serverList=[];
var server=net.createServer(function(socket){
    socket.write("Welcome ! ");
    serverList.push(socket);
    socket.on('data',function(data){
        BroadCast(data);
        console.log("没有加write"+data);
    })
    socket.on("end",function(){
        console.log("End of"+socket);
        serverList.splice(serverList.indexOf(socket),1);
    })
})
    server.listen(8080,"127.0.0.1");
    function BroadCast(data){
        for (var i=0;i<serverList.length;i++){
            serverList[i].write("BroadCast Message:"+data);
        }
    }



































