const CartRepository = require("../Repositories/CartRepository")

module.exports = async(FoodId,CartId)=>{
    try{
        console.log("Food Id: "+FoodId);
        console.log("Cart Id"+CartId);
        const cartId = await CartRepository.AddItemToCart({FoodId:FoodId,CartId:CartId})
        return cartId
    }catch(e){
        throw e.message
    }



}