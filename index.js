const app = require("./app")
const color = require("colors")
console.log("Hello".red);

let a = 10;
let b = 20;
let c = 30;

console.log(a + b + c);

console.log(app);
console.log(`${app.x}`.red);
console.log(app.z());


const arr = [2, 3, 5, 3, 83, 23, 82, 8, 9]

/* const newArr = arr.filter((item) => {
    return item == 3;
})
console.log(newArr); */

const newArr = arr.filter((item) =>{
    return item > 20;
})

console.log(newArr);

const fs = require("fs")

fs.writeFileSync("Basic.java","Some Code...")

const http = require("http")

http.createServer((req , res)=>{
    res.write("Hello Buddy!");
    res.end()
}).listen(3000)
