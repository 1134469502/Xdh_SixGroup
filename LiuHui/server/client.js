var net=require('net');
var  hostname=process.argv[2];
var port=process.argv[3];

var client=net.connect({host:hostname,port:port},function( ){
    process.stdin.setEncoding('utf-8');
    process.stdin.on('readable',function(){
        const chunk=process.stdin.read();
        if(chunk!=null){
            client.write("chunk write:"+chunk);
        }
    })
    process.stdin.on('end',function(){
        client.write("END process stdin");
    });
});
client.on('data',function(data){
  console.log("服务器消息:"+data.toString());
})
client.on('end',function(){
    client.write("CONNECT OVER");
})