const express = require("express");

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

app.listen(4000);