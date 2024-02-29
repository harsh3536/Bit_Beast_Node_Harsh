/* const http = require("http")

const data = require("./data")

http.createServer((req , res)=>{
    res.writeHead(200,{"Content-Type":"application\json"});
    res.write(JSON.stringify(data));
    res.end()
}).listen(3000) */


const http = require("http")

const data1 = require("./data")

http.createServer((req , res)=>{
    res.writeHead(300,{"Content-Type":"application\json"});
    res.write(JSON.stringify(data1));
    res.end()
}).listen(2000)