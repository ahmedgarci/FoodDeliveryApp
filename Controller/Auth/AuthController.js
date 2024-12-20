const LoginRequestValidation = require("../../Infrastructure/RequestsValidation/AuthRequests/LoginRequestValidation");
const RegisterRequestValidation = require("../../Infrastructure/RequestsValidation/AuthRequests/RegisterRequestValidation");
const ActivateAccountUseCase = require("../../UseCases/user/ActivateAccountUseCase");
const LoginUseCase = require("../../UseCases/user/LoginUseCase");
const RegisterUseCase = require("../../UseCases/user/RegisterUseCase");

class AuthController{
    
    static async Register(req,res){
        const{email,phone,fullname,address,password} = req.body;
        console.log(req.body);
        
        try{
            RegisterRequestValidation({_address:address,
                _email:email,_fullName:fullname,
                _password:password,_phone:phone});
            
                let response= await RegisterUseCase({_fullName:fullname,_email:email,
            _address:address,_phone:phone,_password:password
        
        });
        return res.json({"response":response})
        }catch(e){
            return res.status(401).json({error:e.message})
        }
    }

    static async Login(req,res){
        const{email,password} = req.body;
        try{
            LoginRequestValidation({_email:email,_password:password})
            const {token} = await LoginUseCase({_email:email,_password:password})
            res.cookie("token",token)
            return res.json({"token":token})
        }catch(e){
            console.log(e.message);
            return res.status(401).json({error:e.message})
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