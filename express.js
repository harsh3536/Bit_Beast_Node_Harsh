/* const express = require("express");

const app = express();

app.get("", (req, res) => {
    res.send("This is a Home Page");
});

app.get("/about",(req ,res)=>{
    res.send("This is about us page");
})
app.get("/contact",(req,res)=>{
    res.send("This is a contact us page")
})

app.listen(3000);  */


/* const express = require("express");

const app = express();

app.get("", (req, res) => {
    // console.log("My name is =>" , req.query.name);
    res.send(`
        <h1>This is a Home Page</h1>
        <a href = "about">go to about us page</a>
    `)
});

app.get("/about", (req, res) => {
    res.send(`
        <input type = "text" placeholder = "User name" value = "${req.query.name}">
        <button>Submit</button>
        <a href = "/">go to home  page</a>
    `)
    // res.send("This is a about us page")
});

app.listen(20000); */



const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname,"public");
// console.log(publicPath);
// app.use(express.static(publicPath));  // Extension Allow
// console.log(__dirname);


// Without Extension

app.get("/home",(req,res)=>{
    res.sendFile(`${publicPath}/home.html`)
});

app.get("/about",(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get("*",(req,res)=>{
    res.sendFile(`${publicPath}/404.html`)
})
app.listen(3000);   