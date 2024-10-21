const mongo = require('mongoose')

const {Schema} = mongo

const roleSchema = new Schema({
    role:{type:String,unique:true,required:true}
},{timestamps:true}) 

const Role = mongo.model("Role",roleSchema)

module.exports= Role