const jwt = require("jsonwebtoken")
let SecretKey = "#";

module.exports = (data,expiresAt)=>{
    return jwt.sign({data,expiresAt},SecretKey,{expiresIn:3600})
}

