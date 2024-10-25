const UserRepository = require("../../Repositories/User/userRepository")

module.exports = async(id)=>{

    try{
        await UserRepository.deleteUser(id)
    }catch(e){
        throw e
    }

}