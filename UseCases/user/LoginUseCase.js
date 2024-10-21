const ComparePassword = require("../../Infrastructure/Bcrypt/ComparePassword");
const createJwtToken = require("../../Infrastructure/JsonWebToken/createJwtToken");
const userRepository = require("../../Repositories/User/userRepository");

    
    module.exports = async ({_email,_password})=>{
        try{
            // TO DO VALIDATE EMAIL & PASSWORD
            
            let user = await userRepository.findUserByProperty({property:"email",value:_email})
            let isMatch = ComparePassword(_password,user.password);

            if(!isMatch){throw new Error("invalid credentials")}
            if(!user.isActive){throw new Error("please activate ur account first !")}
            const jwtToken = createJwtToken({
                email:user.email,
                id:user.id,
                role:[user.role.role]
            })
            return {
                token:jwtToken
           //     id:user.id
            }
            }catch(e){
                throw new Error(e.message)
        }

    }





