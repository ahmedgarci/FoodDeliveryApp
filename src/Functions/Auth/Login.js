import { PostData } from '../Common/PostDataToBackend';

async function Login({email,password}){
        const {response,error} = await PostData({
            url:"http://localhost:3500/login",
            data:{email,password},
           })
        return {
                response:response,
                error:error}

}

export {Login}

