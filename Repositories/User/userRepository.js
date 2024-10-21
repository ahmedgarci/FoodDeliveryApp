const User = require("../../Entities/userEntity")
const roleRepository = require("../Role/roleRepository")

class UserRepository {

    static async createNewUser({fullName,email,phone,password,address}){
        try{
            let user = await User.create({username:fullName,email:email,
                phone:phone,password:password,address:address,
                role: await roleRepository.getRoleUser()
                })
                await user.save()
                return user
        }catch(e){
            throw new Error(e.message)
        }
       
    }

    static async findUserByProperty({property,value}){
        try{
            let user = await User.findOne({[property]:value})
                .orFail(
                    new Error("oops user not found !")
                    ).populate("role")
                return user;
        }
        catch(e){
            throw new Error(e.message)
        }
    }

    static async updateUserByProperty({id,property,newValue}){
        try{
            let user = await User.findOneAndUpdate({_id:id},{[property]:newValue},{new:true})
                .orFail(new Error("cannot update the user !"))
                    return user;
            await user.save();
            
        }catch(e){
            throw new Error(e.message)
        }
    }
}

module.exports = UserRepository