const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname,"crud");
const filePath = `${dirPath}/apple.txt`

// fs.writeFileSync(filePath,"Hello");

// fs.readFile(filePath,"utf8",(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath ," my name is Harsh ",(err)=>{
//     if (!err){
//         console.log("File is Updated");
//     }
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("File Name is Updated");
//     }
// })

fs.unlinkSync(`${dirPath}/fruit.txt`)