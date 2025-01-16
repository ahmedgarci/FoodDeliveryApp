
const mongo = require('mongoose')

const {Schema} = mongo

const tokenSchema = new Schema({
    code: { type: String,required:true},
    issuedAt: { type: Date, required: true , default:Date.now()},
    expiresAt: { type: Date, required: true },
    validatedAt: { type: Date },
    user:{type:mongo.Schema.Types.ObjectId,ref:"User"},
}) 

const Token = mongo.model("token",tokenSchema)

module.exports= Token