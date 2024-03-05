// Applicaton Level MiddleWare

/* const express = require("express");

const app = express();

const reqFilter = (req, res, next) => {
    // console.log("reqFilter");
    if (!req.query.age) {
        res.send("Please Provide Age")
    } else if (req.query.age < 18) {
        res.send("You can not access this page")
    }
    else {
        next();
    }
}

app.use(reqFilter);

app.get("/", (req, res) => {
    res.send("Hello , This is a home page...")
});

app.get("/user", (req, res) => {
    res.send("This is a user Page..")
});

app.listen(4000); */


// Route Level MiddleWare    // conect conmiddleware file

const express = require("express");
const reqFilter = require("./conmiddleware");
const app = express();
const route = express.Router()
route.use(reqFilter)

app.get("/",(req,res)=>{
    res.send("You are in home page")
});

// app.get("/about",reqFilter,(req,res)=>{
//     res.send("You are in about us page")
// });
route.get("/about",(req,res)=>{
    res.send("You are in about us page")
});

// app.get("/contect",reqFilter,(req,res)=>{
//     res.send("You are in contect us page")
// });
route.get("/contect",(req,res)=>{
    res.send("You are in contect us page")
});
 
app.get("/user",(req,res)=>{
    res.send("You are in user page")
});

app.use("/",route)
app.listen(7000);