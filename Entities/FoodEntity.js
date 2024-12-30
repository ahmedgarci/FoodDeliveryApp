const mongo = require('mongoose')

const {Schema} = mongo

const foodSchema = new Schema({
    name: { type: String,required:true},
    Price:{type:Number,required:true},
    description:{type:String,required:true},
    imageId:{type:mongo.Types.ObjectId,ref:"image"},
    categoryName:{type:mongo.Types.ObjectId,ref:"category"},
    comment:[{type:mongo.Types.ObjectId,ref:"comments"}]
},{timestamps:true}) 

const food = mongo.model("food",foodSchema)

module.exports= food
