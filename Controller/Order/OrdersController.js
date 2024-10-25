const PlaceOrder = require("../../UseCases/Order/PlaceOrder");

module.exports = class OrderController{

    async MakeOrder(req,res){
        try{
            const {foodIds} = req.query;
            if(!foodIds){throw new Error("invalid food Id !")}
            
            await PlaceOrder(foodIds,req.user.data.id);

            return res.json("order placed !")
        }catch(e){
            return res.json(e.message)
        }
    }

}