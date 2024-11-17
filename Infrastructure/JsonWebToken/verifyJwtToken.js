const jwt = require("jsonwebtoken")
module.exports = (token)=>{
        
    return jwt.verify(token,"#",(err,decoded)=>{
        if(err){return false }
        return decoded;
    })

}
