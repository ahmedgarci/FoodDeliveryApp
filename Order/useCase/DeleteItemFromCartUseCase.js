const CartRepository = require("../Repositories/CartRepository")

module.exports = async({FoodId,CartId})=>{
    try{
        const cart = await CartRepository.deleteItemFromCart({FoodId:FoodId,CartId:CartId})
        
    }catch(e){
        throw e.message
    }



}