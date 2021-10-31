const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.cart=require("./Cart")
db.order=require("./Order")
db.product=require("./Product")
db.category=require("./category")





module.exports = db;