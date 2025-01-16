const OrderRepository = require("../Repositories/OrderRepository")

module.exports = async(CartId,userId)=>{

    try{
        await OrderRepository.PlaceOrder({userId:userId,CartId:CartId,price:90})
    }catch(e){
        throw e
    }
}