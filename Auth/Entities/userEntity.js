const mongo = require('mongoose')

const {Schema} = mongo

const userSchema = new Schema({
    username: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isActive:{type:Boolean,default:false},
    role:{type:mongo.Schema.Types.ObjectId,ref:"Role"}
}) 

const User = mongo.model("User",userSchema)

module.exports= User