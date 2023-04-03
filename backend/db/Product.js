const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    userId:String,
    company:String,
    category:String,
    name:String,
    price:String
    
});

module.exports = mongoose.model("product",productSchema)