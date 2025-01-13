const { AddItemToCart } = require("../../Repositories/Cart/CartRepository");
const PlaceOrder = require("../../UseCases/Order/PlaceOrder");

module.exports = class OrderController{

    async MakeOrder(req,res){
        try{
            const {CartId} = req.body
            if(!CartId){
               return res.status(400).json({error:"invalid cart id"})
            }
            await PlaceOrder(CartId,req.user.id);
            console.log("order placed");
            return res.json("order placed !")

        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    async addItem(req, res) {
        try {
            const { CartId } = req.params;
            const { FoodId } = req.body;

            if (!CartId || !FoodId) {
                return res.status(400).json({ error: "CartId and FoodId are required." });
            }
            const result = await AddItemToCart({ CartId, FoodId });    
            if (!result) {
                return res.status(404).json({ error: "Item could not be added to the cart." });
            }
            return res.status(200).json({ message: "Item added successfully" });
        } catch (e) {
            console.error("Error adding item to cart:", e);
            return res.status(500).json({ error: "An error occurred while adding the item to your cart. Please try again later." });
        }
    }


    async deleteItem(req,res){
        try{
            const {CartId} = req.Params;
            if(!CartId){throw new Error("invalid food Id !")}
            
            await PlaceOrder(CartId,req.user.data.id);

            return res.status(200).json("order placed !")
        }catch(e){
            return res.status(400).json(e.message)
        }
    }






}