const Token = require("../Entities/TokenEntity");
const UserRepository = require("./userRepository");

class TokenRepository{

    static async createToken(_code,email){
        const expirationDate = new Date()
        expirationDate.setMinutes(expirationDate.getMinutes()+15);
        try{
            let user = await UserRepository.findUserByProperty({property:"email",value:email})
            let token = await Token.create({code:_code,
                expiresAt:expirationDate,
                user:user._id
            });
            await token.save();
        }catch(e){
            throw new Error("error while creating token !");
        }
      
    }

    static async getToken(_code){
        try{
            return await Token.findOne({code:_code})
            .populate("user")
            .orFail(new Error("token not found"))
        }catch(e){
            throw new Error(e.message)
        }
      
    }


 


}
module.exports = TokenRepository