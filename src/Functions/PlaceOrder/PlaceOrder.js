const { PostData } = require("../Common/PostDataToBackend");

async function ConfirmOrder({CartId}){
    const {error,response} = await PostData({url:"http://localhost:3500/Order/place",data:{"CartId":CartId}})
    return {
        error,response
    }
}

export {ConfirmOrder}