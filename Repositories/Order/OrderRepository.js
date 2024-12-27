const Order = require("../../Entities/OrderEntity")

module.exports = class OrderRepository{

    static async PlaceOrder({userId,CartId,price}){
        try{
            let order = await Order.create({
                price:price,
                cart:CartId,
                user:userId
            });
            await order.save();
        }catch(e){
            throw new Error(e.message);
        }
    }



}