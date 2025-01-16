
const mongo = require("mongoose")

const {Schema} = mongo 

const CartSchema = new Schema({
    products:[{type:mongo.Types.ObjectId,ref:"food"}],
    TotalPrice:Number,
},
{timestamps:true}
)
const Cart = mongo.model("cart",CartSchema)

module.exports = Cart
