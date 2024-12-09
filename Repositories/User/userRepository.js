const { mongo } = require("mongoose")
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
            await user.save();
            return user;
        }catch(e){
            throw new Error(e.message)
        }
    }

    // TO DO GET ALL USERS WITHOUT ADMIN
    static async getAllUsers(){
        try{
            const allusers = await User.find({})
            .select(["username","email","address"])
            .orFail(()=>new Error("error while fetching users"))
            return allusers;
        }catch(e){
            throw new Error(e.message)
        }
    }
    static async deleteUser(id){
        console.log(id);
        try{
            return await User.findByIdAndDelete(id).orFail(()=>new Error("error while deleting user"))
        }catch(e){
            throw new Error(e.message)
        }
    }








}

module.exports = UserRepository