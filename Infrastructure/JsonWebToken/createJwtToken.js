const jwt = require("jsonwebtoken")
let SecretKey = "127Grnypteed277652YR4H";

module.exports = (data,expiresAt)=>{
    return jwt.sign({data,expiresAt},SecretKey,{expiresIn:3600})
}

