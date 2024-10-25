const jwt = require("jsonwebtoken")
module.exports = (token)=>{
        
    return jwt.verify(token,"127Grnypteed277652YR4H",(err,decoded)=>{
        if(err){return false }
        return decoded;
    })

}