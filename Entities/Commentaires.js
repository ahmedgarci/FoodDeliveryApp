const mongo = require('mongoose')

const {Schema} = mongo

const commentSchema = new Schema({
    name: { type: String,required:true},

},{timestamps:true}) 

const comment = mongo.model("comments",commentSchema)

module.exports= comment