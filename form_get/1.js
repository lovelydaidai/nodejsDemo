var http = require("http");
var url = require("url");
var server = http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;
    res.end("服务器收到了请求，名字是："+name+"年龄："+age+"性别："+sex);
});

server.listen(3000,"127.0.0.1");























/**
 * Created by pl on 2017/4/22.
 */
