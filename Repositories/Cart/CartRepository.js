const Cart = require("../../Entities/CartEntity")


module.exports = class CartRepository{


    async createNewCart(){
        try{
            const cart = await Cart.create();
            await category.save()
            return cart
        }catch(e){
            throw e.message
        }
    }

    static async AddItemToCart({CartId,FoodId}){
        try{
            const cart = await Cart.findById(CartId).populate("food");
            if(!cart){
                cart = await createNewCart() 
            }
            cart.products.push(FoodId)
            await cart.save()
           // cart.TotalPrice = cart.products.map(item => item. )
            return CartId
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