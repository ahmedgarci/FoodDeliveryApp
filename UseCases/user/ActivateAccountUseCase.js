const MailService = require("../../Infrastructure/Mailing/mailService");

module.exports = async(codeInserted)=>{
    try{  
        await MailService.validateToken(codeInserted)
        
    }catch(e){
        throw e
    }

}