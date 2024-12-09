const CartRepository = require("../../Repositories/Cart/CartRepository")

module.exports = async(FoodId,CartId)=>{
    try{
        const cartId = await CartRepository.AddItemToCart({FoodId:FoodId,CartId:CartId})
        return cartId
    }catch(e){
        throw e.message
    }



}