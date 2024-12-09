
module.exports = ({_fullName,_email,_phone,_password,_address})=>{
 
    // TO DO VERIFICATION @ .
    if(!_email || _email.trim().length ===0   ){
        throw new Error("email is required")
    }
    if(!_address  || _address.trim().length === 0 ){
        throw new Error("address is required")
    }
    if( !_password ||  _password.trim().length < 8){
        throw new Error("password must contains at least 8 characters")
    }

    let PhoneString = _phone.toString() 
    if( !PhoneString ||  PhoneString.trim().length < 8){
        throw new Error("enter a valid phone number ")
    }
    


}