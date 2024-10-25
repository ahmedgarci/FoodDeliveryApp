const CryptPassword = require("../../Infrastructure/Bcrypt/CryptPassword");
const RegisterRequestValidation = require("../../Infrastructure/RequestsValidation/AuthRequests/RegisterRequestValidation");
const MailService = require("../../Infrastructure/Mailing/mailService");
const userRepository = require("../../Repositories/User/userRepository");
   
    module.exports = async({_fullName,_email,_phone,_password,_address})=>{
        try{
            await RegisterRequestValidation({fullName:_fullName,
                email:_email,
                phone:_phone,
                password:_password,
                address:_address})

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
                throw e
        }

    }
    
  





