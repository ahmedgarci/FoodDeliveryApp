const mongoose = require("mongoose");
const Cart = require("../Entities/CartEntity");
const Food = require("../../Food/entities/FoodEntity");

module.exports = class CartRepository {

  static async getOrCreateCart(CartId) {
    console.log(mongoose.Types.ObjectId.isValid(CartId));
    return mongoose.Types.ObjectId.isValid(CartId) ? 
    (await Cart.findById(CartId) || await Cart.create({ products: [], TotalPrice: 0 }) ) :
    (await Cart.create({ products: [], TotalPrice: 0 }))

  }

  static async AddItemToCart({ CartId, FoodId }) {
    try {
      console.log(FoodId);
      const cart = await CartRepository.getOrCreateCart(CartId);
      const foodItem = await Food.findById(FoodId).orFail(() => new Error("Food item not found"));
      cart.products.push(foodItem);
//      cart.TotalPrice = cart.products.reduce((total, item) => total + item.Price, 0);

      await cart.save();
      return cart._id;
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message || "Failed to add item to cart");
    }
  }

  static async deleteItemFromCart({ CartId, FoodId }) {
    try {
      
        const cart = await Cart.findById(CartId).orFail("cart not found")
        cart.products.filter(item=>item._id.toString() !== FoodId.toString())
        cart.save()
    } catch (e) {
      throw new Error(e.message || "Failed to delete item from cart");
    }
  }
};
