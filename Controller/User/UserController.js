const getAllUsersUseCase = require("../../UseCases/user/getAllUsersUseCase")
const deleteUserUseCase = require("../../UseCases/user/DeleteUserUseCase")

module.exports  = class UserController{

    async getAllUsers(req,res){
        try{
            const users = await getAllUsersUseCase();
            return res.json({message:users})
        }catch(e){
            return res.json({message:e.message})
        }
    }

    async deleteUser(req,res){
        let {id} = req.params
        if(!id){
            return res.status(403).json({error:" id is not valid"})
        }
        try{
            await deleteUserUseCase(id)
            return res.json({message:"user deleted "})
        }catch(e){
            console.log(e);
            return res.status(403).json({error:e.message})
        }
    }

    





}