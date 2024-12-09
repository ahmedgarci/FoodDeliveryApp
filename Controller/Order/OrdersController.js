const { AddItemToCart } = require("../../Repositories/Cart/CartRepository");
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

    async addItem(req,res){
        try{
            const {CartId} = req.params;
            const {FoodId}=req.body
            
            const id = await AddItemToCart({CartId:CartId,FoodId:FoodId})
            return res.json(id)
        }catch(e){
            return res.status(403).json({error:e})
        }
    }



    async deleteItem(req,res){
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