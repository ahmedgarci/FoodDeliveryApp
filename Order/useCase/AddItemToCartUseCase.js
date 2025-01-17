const CartRepository = require("../Repositories/CartRepository")

module.exports = async(FoodId,CartId)=>{
    try{
        return await CartRepository.AddItemToCart({FoodId:FoodId,CartId:CartId})
    }catch(e){
        throw e.message
    }



    
}