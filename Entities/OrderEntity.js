const mongo = require('mongoose')

const {Schema} = mongo

const orderSchema = new Schema({
    price: { type: mongo.Types.Decimal128 ,required:true},
    cart: {type:mongo.Types.ObjectId, ref:"Cart",required:true},
    user:{type:mongo.Types.ObjectId , ref:"user",required:true},
    //TO DO
    place:{type:String}
},{timestamps:true}) 

const order = mongo.model("order",orderSchema)

module.exports= order