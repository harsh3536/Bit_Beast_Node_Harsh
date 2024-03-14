const express = require ("express");
const dbConnect = require ("./mongodb");
const mongodb = require("mongodb")
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    // res.send({fname: "Harsh",lname : "Khokhar"});
    let data = await dbConnect();
    // console.log(data);
    data = await data.find().toArray();
    res.send(data);
});

app.post("/", async (req, res) => {
    // res.send({name:"Harsh"})
    // console.log(req.body);
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
});

app.put("/:name", async (req, res) => {
    // console.log(req.body);
    let data = await dbConnect();
    let result = await data.updateOne(
        // {name : "mi"},
        // {$set:{price : 2000}}
        // {name : req.body.name},
        { name: req.params.name }, // original name ne change krva mate
        { $set: req.body }
    );
    res.send({ result   : "Updated" })
});

app.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    let data = await dbConnect();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result)
});

app.listen(3000);