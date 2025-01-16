const mongo = require('mongoose')

const {Schema} = mongo


const imageSchema = new Schema({
    publicId:{type:String,required:true},
    imageUrl:{type:String,required:true},
},{timestamps:true}) 

const image = mongo.model("image",imageSchema)

module.exports= image