const mongo = require('mongoose')

const {Schema} = mongo

const commentSchema = new Schema({
    user:{type:mongo.Types.ObjectId,ref:"User",required:true},
    commentaire: { type: String,required:true},

},{timestamps:true}) 

const Comment = mongo.model("comments",commentSchema)

module.exports= Comment