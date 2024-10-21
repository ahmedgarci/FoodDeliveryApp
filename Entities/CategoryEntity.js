const mongo = require('mongoose')

const {Schema} = mongo

const categorySchema = new Schema({
    name: { type: String,required:true},
    foods:[{type:mongo.Types.ObjectId,ref:"food",required:true}]
},{timestamps:true}) 

const Category = mongo.model("category",categorySchema)

module.exports= Category