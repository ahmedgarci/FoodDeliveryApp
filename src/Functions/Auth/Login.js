import { PostData } from '../Common/PostDataToBackend';

async function Login({email,password}){
    // TO DO
    try{
        const response = await PostData({
            url:"http://localhost:3500/login",
            data:{email,password},
            withCredentials:true,})
    return {response}
    }catch(e){
        return{error:e.response.data.error}
    }
   

}

export {Login}

