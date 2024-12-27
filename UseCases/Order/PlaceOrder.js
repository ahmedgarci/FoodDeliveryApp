const OrderRepository = require("../../Repositories/Order/OrderRepository")

module.exports = async(CartId,userId)=>{

    try{
        await OrderRepository.PlaceOrder({userId:userId,CartId:CartId,price:90})
    }catch(e){
        throw e
    }
}