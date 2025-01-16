const UserRepository = require("../../Auth/Repo/userRepository")

module.exports = async(id)=>{

    try{
        return await UserRepository.deleteUser(id)
    }catch(e){
        throw e
    }

}