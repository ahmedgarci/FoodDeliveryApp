const order = require("../../Entities/OrderEntity")

module.exports = class OrderRepository{

    static async PlaceOrder({userId,foodIds,price}){
        try{
            const food = await order.create({
                price:price,
                foods:foodIds,
                user:userId
            });
            await food.save();
        }catch(e){
            throw new Error(e.message);
        }
    }



}