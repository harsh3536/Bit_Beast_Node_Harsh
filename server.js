/* const http = require("http")

http.createServer((req, res) => {
    res.write("Hello Nirjar Gajera");
    res.end()
}).listen(3500); */

/* const color = require("colors")
const http = require("http")

http.createServer((req , res) =>{
    res.write("<h1>Hello Shubham Zala</h1>")
    res.end();
}).listen(404) */

const http = require ("http")

function dataControl(req ,res){
    res.write("Hello Buddy!")
    res.end()
}   

http.createServer(dataControl).listen(200)
