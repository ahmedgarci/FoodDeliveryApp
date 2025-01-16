const UserRepository = require("../../Auth/Repo/userRepository")

module.exports = async()=>{

    try{
        return await UserRepository.getAllUsers()
    }catch(e){
        throw e
    }

}