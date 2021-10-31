const express=require("express")
const env=require("dotenv").config()
const mongoose=require("mongoose")
const app=express();


const cors = require("cors");


// parse requests of content-type - application/json
app.use(express.json())
/*var corsOptions = {
  origin: "http://localhost:2000"
};*/

app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const userRoute = require("./router/user");
const authRoute = require("./router/auth");
const productRoute = require("./router/product");
const cartRoute = require("./router/cart");
const orderRoute = require("./router/order");
const stripeRoute = require("./router/stripe");


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


const db = require("./model");
const dbConfig = require("./config/db.config");

const conStr = 'mongodb://localhost:27017/flipkart';
db.mongoose.connect(conStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const port=process.env.PORT

app.listen(process.env.PORT,()=>{
    console.log(`server is running on the port ${process.env.PORT}`)
})
