const PlaceOrder = require("../../UseCases/Order/PlaceOrder");

module.exports = class OrderController{

    async MakeOrder(req,res){
        try{
            const {CartId} = req.Params;
            if(!CartId){throw new Error("invalid food Id !")}
            
            await PlaceOrder(CartId,req.user.data.id);

            return res.json("order placed !")
        }catch(e){
            return res.json(e.message)
        }
    }

}