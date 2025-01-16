const  createNewFood = require("./useCase/CreateNewFood");
const  deleteFood = require("./useCase/DeleteFood");
const GetAllFood = require("../Food/useCase/GetAllFood");
const ValidateFoodRequestcreate = require("../Infrastructure/RequestsValidation/FoodRequests/ValidateFoodRequestcreate");
const GetFoodById = require("./useCase/GetFoodById");

module.exports = class FoodController{


    async RegisterFood(req,res){
        console.log("a")
        var {price,name,description,imageId,category} = req.body;
        try{
            ValidateFoodRequestcreate({_name:name,_price:parseInt(price),
                _description:description,_imageFile:imageId,
                Category:category
            });
            await createNewFood({_price:parseInt(price),_name:name,_description:description,
                _imageId:imageId,
                _categoryId:category
            });  
            return res.json({message:"new food was created :"+name});
        }catch(e){
            return res.status(400).json({error:e.message})
        }
    }


    async deleteSpecificFood(req,res){
        let {id} = req.params;
        try{
            if(!id){throw new Error("id is not valid")}
            await deleteFood(id);
            return res.json({message:"deleted successfully ! "});
        }catch(e){
            return res.status(400).json({error:e.message})
        }
    }

    async getAllFood(req,res){
        try{
            const x = await GetAllFood()
            return res.json({message:x});
        }catch(e){
            return res.status(500).json({message:e.message})
        }
    }

      async getFoodById(req,res){
        let {FoodId} = req.params;
        try{
            return res.json({message:await GetFoodById(FoodId)});
        }catch(e){
            return res.status(400).json({message:e.message})
        }
    }




}