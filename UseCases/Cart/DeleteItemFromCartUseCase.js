const CartRepository = require("../../Repositories/Cart/CartRepository")

module.exports = async({FoodId:FoodId,CartId:CartId})=>{
    try{
        const cart = await CartRepository.deleteItemFromCart({FoodId:FoodId,CartId:CartId})
        console.log("deleted");
    }catch(e){
        throw e.message
    }



}