const dbConnect = require("./mongodb");

//      Create Data  
/* 
const main =async () => {
    let data = await dbConnect();
    data =await data.find().toArray();
    // data =await data.find({name:"vivo"}).toArray();
    console.log(data);
}

main(); */

// Promises

/* dbConnect().then((res) => {
    res.find().toArray().then((data)=>{
        console.log(data);
    })
}) */

//      Insert Data


const insertData = async ()=>{
    let db = await dbConnect();
    // console.log(db);
    let result  = await db.insert(
        [
            { name: "asus", price: 15000, category: "Mobile" }
        ]
    );
    // console.log(result);
}

insertData()

/* const mongoose = require("mongoose");

const url = "mongodb://localhost:27017";
const databaseName = "data";

// Connect to MongoDB
mongoose.connect(`mongodb://localhost:27017/data`, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Mongoose schema and model
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
});

const Product = mongoose.model("Product", productSchema);

// Insert Data
async function insertData() {
    try {
        const result = await Product.insertMany([
            { name: "asus", price: 15000, category: "Mobile" }
        ]);
        console.log(result);
    } catch (error) {
        console.error("Error inserting data:", error);
    } finally {
        // Close the Mongoose connection after inserting data (if needed)
        mongoose.connection.close();
    }
}

insertData();
 */