import { POST } from "../Common/POST";


async function ConfirmOrder({CartId}){
    const {error,response} = await POST({url:"http://localhost:3500/Order/place",data:{"CartId":CartId}})
    return {
        error,response
    }
}

export {ConfirmOrder}