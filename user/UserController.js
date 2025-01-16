const deleteUserUseCase = require("./useCase/DeleteUserUseCase")
const getAllUsersUseCase = require("./useCase/getAllUsersUseCase")

module.exports  = class UserController{

    async getAllUsers(req,res){
        try{
            const users = await getAllUsersUseCase();
            return res.status(200).json({message:users})
        }catch(e){
            return res.status(500).json({message:e.message})
        }
    }

    async deleteUser(req,res){
        let {id} = req.params
        if(!id){
            return res.status(400).json({error:" id is not valid"})
        }
        try{
            await deleteUserUseCase(id)
            return res.status(200).json({message:"user deleted "})
        }catch(e){
            return res.status(500).json({error:e.message})
        }
    }

    





}