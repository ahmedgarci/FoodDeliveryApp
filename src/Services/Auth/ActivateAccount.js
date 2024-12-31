import { POST } from "../Common/POST"

async function ActivateUserAccount(code){
    const { response,error} = await POST({url:"http://localhost:3500/verify"
        ,data:{"code":code}})
    return{response,error}
}


export {ActivateUserAccount}