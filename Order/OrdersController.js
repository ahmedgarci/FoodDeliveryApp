const AddItemToCart  = require("./useCase/AddItemToCartUseCase");
const DeleteItemFromCartUseCase = require("./useCase/DeleteItemFromCartUseCase");
const PlaceOrder = require("./useCase/PlaceOrder");

module.exports = class OrderController{

    async MakeOrder(req,res){
        try{
            const {CartId} = req.body
            if(!CartId){
               return res.status(400).json({error:"invalid cart id"})
            }
            await PlaceOrder(CartId,req.user.id);

            return res.json("order placed !")

        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    async addItem(req, res) {
        try {
            const { CartId } = req.params;
            const { FoodId } = req.body;
            if (!FoodId) {
                return res.status(400).json({ error: "FoodId are required." });
            }
            const result = await AddItemToCart(FoodId,CartId);    
            if (!result) {
                return res.status(404).json({ error: "Item could not be added to the cart." });
            }
            return res.status(200).json(result);
        } catch (e) {
            return res.status(500).json({ error: "An error occurred while adding the item to your cart. Please try again later." });
        }
    }


    async deleteItem(req,res){
        try{
            const {CartId} = req.params;
            const {FoodId} = req.body;
            if(!CartId || !FoodId){throw new Error("invalid Cart Id || FoodId!")}
            await DeleteItemFromCartUseCase({FoodId:FoodId,CartId:CartId});
            return res.status(200).json("item deleted")
        }catch(e){
            return res.status(400).json(e.message)
        }
    }






}