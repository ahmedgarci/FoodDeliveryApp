const CryptPassword = require("../../Infrastructure/Bcrypt/CryptPassword");
const RegisterRequestValidation = require("../../Infrastructure/RequestsValidation/AuthRequests/RegisterRequestValidation");
const MailService = require("../../Infrastructure/Mailing/mailService");
const userRepository = require("../Repo/userRepository");
   
    module.exports = async({_fullName,_email,_phone,_password,_address})=>{
        try{
                RegisterRequestValidation({_address:_address,_phone:_phone,_fullName:_fullName,_email:_email,_password:_password});
                let savedUser = await userRepository.createNewUser({email:_email,
                fullName:_fullName,
                phone:_phone,
                password:CryptPassword(_password),
                address:_address,  
            })
                
                MailService.sendEmailToUser(_email,"Food delivery account Activation");

            return {
                email:savedUser.email,
                message:"please check ur email in order to activate ur account"
            }
            }catch(e){
                throw e.message
        }

    }
    
  





