import { PostData } from '../Common/PostDataToBackend';

async function Login({email,password}){
    // TO DO
    try{
        const response = await PostData({url:"http://localhost:3500/login",data:{email,password},
        withCredentials:true,
        
    })
        console.log(response);
    }catch(e){
        console.log(e);
    }
   

}

export {Login}

