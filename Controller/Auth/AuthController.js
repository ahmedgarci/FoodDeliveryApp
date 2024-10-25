const ActivateAccountUseCase = require("../../UseCases/user/ActivateAccountUseCase");
const LoginUseCase = require("../../UseCases/user/LoginUseCase");
const RegisterUseCase = require("../../UseCases/user/RegisterUseCase");

class AuthController{
    
    static async Register(req,res){
        try{
            const{email,phone,fullname,address,password} = req.body;
            let response= await RegisterUseCase({_fullName:fullname,_email:email,
            _address:address,_phone:phone,_password:password
        });
         //   req.user = response.email
        return res.json({"response":response})
        }catch(e){
            return res.json({message:e.message})
        }
    }

    static async Login(req,res){
        try{
            // TO DO VAALIDATE LOGIN REQUEST
        const{email,password} = req.body;
        const {token} = await LoginUseCase({_email:email,_password:password})
        res.cookie("token",token)
        return res.json({"token":token})
        }catch(e){
            return res.json({error:e.message})
        }
    }

    static async activateAccount(req,res){
        try{
            const {code} = req.query
            
            await ActivateAccountUseCase(code)
            return res.json({message:"account activated ! "})
        }catch(e){
            return res.json({error:e.message})
        }
    }





}

module.exports = AuthController