const { PostData } = require("../Common/PostDataToBackend");

async function ConfirmOrder({CartId}){
    console.log(CartId);
    const {error,response} = await PostData({url:"http://localhost:3500/Order/place",data:CartId})
    console.log(response);
    return {
        error,response
    }
}

export {ConfirmOrder}