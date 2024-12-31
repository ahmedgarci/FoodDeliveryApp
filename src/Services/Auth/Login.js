import { POST } from "../Common/POST"

async function Login({email,password}){
        const {response,error} = await POST({
            url:"http://localhost:3500/login",
            data:{email,password},
           })
        return {
                response,
                error}

}

export {Login}

