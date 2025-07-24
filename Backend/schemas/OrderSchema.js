const {Schema} = require("mongose")

const OrderSchema = new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,
});

module.exports = {OrderSchema};