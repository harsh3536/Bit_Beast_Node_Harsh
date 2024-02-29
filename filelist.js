const fs = require ("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");

// for (i = 1; i < 5; i++) {
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,"Hello Budyy!");
// }

fs.readdir(dirPath,(err,files)=>{
    // console.log(files);   // Array listed
    files.forEach((item)=>{
        console.log("This File Name is:",item);
    });
});