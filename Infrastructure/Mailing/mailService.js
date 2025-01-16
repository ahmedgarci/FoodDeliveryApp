const MailInfra = require("./mailInfra");
const TokenRepository = require("../../Auth/Entities/TokenEntity");
const UserRepository = require("../../Auth/Entities/userEntity");



class MailService{
    static async sendEmailToUser(receiver,subject){
        const code = this.generateCode();
        await MailInfra.sendEmail(receiver,code,subject);
        await this.SaveTokenGenerated({toWhom:receiver,token:code});
    }    

    static async validateToken(UrlToken){
        try{
            let token = await TokenRepository.getToken(UrlToken);
            let user = await UserRepository.findUserByProperty({property:"_id",value:
            token.user._id
            })
            if( token.user.email !== user.email ){
                throw new Error("cannot validate account due to incorrect email")            
            }
            if(token.expiresAt < Date.now()){
                this.sendEmailToUser(token.user.email,"Food Delivery Account activation")
                throw new Error("token expired a new one is sent")
            }
            user.isActive = !user.isActive;
            await user.save();

        }catch(e){
            throw new Error(e.message);
}
       
    }

    static async SaveTokenGenerated({toWhom,token}){
        try{
            await TokenRepository.createToken(token,toWhom);
        }catch(e){
            throw new Error(e.message)
        }    
    }

    static generateCode(){
        let alphabet = "azertyuiopqsdfghjklmnbvcxw123456789";
        let code=""; 
        for(let i =0 ;i<5;i++){
            let randomInt = Math.floor(Math.random() * alphabet.length ); 
            code+= alphabet.charAt(randomInt);
        }
        return code;
    }



}
module.exports = MailService