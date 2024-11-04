

module.exports = (req,res,next)=>{
    let roles = req.user.role;
    if(roles.some(r=> r === "ADMIN")){
        return next()
    }
    return res.status(403).json({message:"this is only accessible by the admin"})
}