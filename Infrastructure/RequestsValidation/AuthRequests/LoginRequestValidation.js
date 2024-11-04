
module.exports = ({_email,_password})=>{
    if(!_email || _email.trim().length < 0){
        throw new Error("email is not valid")
    }

    if(!_password || _password.trim().length < 8){
        throw new Error("password is not valid")
    }

}