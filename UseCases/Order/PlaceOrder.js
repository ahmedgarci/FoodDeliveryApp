const FoodRepository = require("../../Repositories/Food/FoodRepository")
const OrderRepository = require("../../Repositories/Order/OrderRepository")

module.exports = async(foodId,userId)=>{

    try{
        
        OrderRepository.PlaceOrder({userId:userId,foodIds:foodId,price:90})
    }catch(e){
        throw e
    }
}