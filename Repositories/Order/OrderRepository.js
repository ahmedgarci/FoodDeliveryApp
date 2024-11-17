const order = require("../../Entities/OrderEntity")

module.exports = class OrderRepository{

    static async PlaceOrder({userId,CartId,price}){
        try{
            const order = await order.create({
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