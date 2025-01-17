const mongoose = require("mongoose");
const Cart = require("../Entities/CartEntity");
const Food = require("../../Food/entities/FoodEntity");

module.exports = class CartRepository {
  static async getOrCreateCart(CartId) {
    return mongoose.Types.ObjectId.isValid(CartId)
      ? (await Cart.findById(CartId)) || (await Cart.create({ products: [], TotalPrice: 0 }))
      : await Cart.create({ products: [], TotalPrice: 0 });
  }

  static async AddItemToCart({ CartId, FoodId }) {
    try {
      const cart = await CartRepository.getOrCreateCart(CartId);
      const foodItem = await Food.findById(FoodId).orFail(() => new Error("Food item not found"));

      cart.products.push(FoodId);
      cart.TotalPrice = await CartRepository.CalculateCartTotalAmount(cart);
      await cart.save();
      return cart._id;
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message || "Failed to add item to cart");
    }
  }

  static async deleteItemFromCart({ CartId, FoodId }) {
    try {
      const cart = await Cart.findById(CartId).orFail(() => new Error("Cart not found"));

      cart.products = cart.products.filter((item) => item.toString() !== FoodId.toString());

      cart.TotalPrice = await CartRepository.CalculateCartTotalAmount(cart);
      await cart.save();
      return cart;
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message || "Failed to delete item from cart");
    }
  }

  static async CalculateCartTotalAmount(CartObject) {
    await CartObject.populate("products");

    if (!CartObject.products || CartObject.products.length === 0) {
      return 0;
    }

    return CartObject.products.reduce((total, item) => {
      const itemPrice = item.Price || 0; 
      return total + itemPrice;
    }, 0); 
  }
};
