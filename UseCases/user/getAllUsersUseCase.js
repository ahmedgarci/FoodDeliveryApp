const UserRepository = require("../../Repositories/User/userRepository")

module.exports = async()=>{

    try{
        return await UserRepository.getAllUsers()
    }catch(e){
        throw e
    }

}