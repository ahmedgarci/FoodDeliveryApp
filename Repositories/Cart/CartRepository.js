const Cart = require("../../Entities/CartEntity")


module.exports = class CartRepository{



    static async AddItemToCart({CartId,FoodId}){
        try{
            var cart = await Cart.findById(CartId).or((await Cart.create({products:[],TotalPrice:0})).save());
            cart.products.push(FoodId)
            await cart.save()
//            cart.TotalPrice = cart.products.map((totale,item) => totale+item.Price )
//            await cart.save()
            return cart._id
        }catch(e){
            throw e.message
        }
    }



    static async deleteItemFromCart({CartId,FoodId}){
        try{
            const Cart = await Cart.findById(CartId).orFail("cart not found")
            const UpdatedCart = Cart.products.filter(item=>item._id.toString() !== FoodId.toString())
            await UpdatedCart.save()
        }catch(e){
            throw e
        }
    }


}