const verifyJwtToken = require("../JsonWebToken/verifyJwtToken");


module.exports = (req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({message:"token is not valid  "});
    }
    let isDecoded = verifyJwtToken(token)
    if(isDecoded){
        req.user = isDecoded.data;
        return next()
    }
     return res.status(401).json({message:"token is not valid  ! "})
    
}