
module.exports = ({fullName,email,phone,password,address})=>{
    if(fullName.trim().length == 0 ){
        throw new Error("fullname is required")
    }
    // TO DO VERIFICATION @ .
    if(email.trim().length == 0  ){
        throw new Error("email is required")
    }
    if(!address  || address.trim().length == 0 ){
        throw new Error("address is required")
    }
    if( !password ||  password.trim().length < 8){
        throw new Error("password must contains at least 8 characters")
    }
    


}