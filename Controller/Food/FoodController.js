const { createNewFood, deleteFood } = require("../../Repositories/Food/FoodRepository");
const FoodByCategory = require("../../UseCases/Food/FoodByCategory");
const GetAllFoods = require("../../UseCases/Food/Crud/GetAllFoods");
const ValidateFoodRequestcreate = require("../../Infrastructure/RequestsValidation/FoodRequests/ValidateFoodRequestcreate");
const GetFoodById = require("../../UseCases/Food/GetFoodById");

module.exports = class FoodController{

    async RegisterFood(req,res){
        var {price,name,description,imageId,category} = req.body;
        try{
            ValidateFoodRequestcreate({_name:name,_price:price,_description:description,_imageFile:imageId});
            await createNewFood({_price:price,_name:name,_description:description,
                _imageId:imageId,
                _categoryId:category});  
            return res.json({message:"new food was created :"+name});
        }catch(e){
            return res.status(403).json({error:e.message})
        }
    }


    async deleteSpecificFood(req,res){
        let {id} = req.params;
        try{
            if(!id){throw new Error("id is not valid")}
            await deleteFood(id);
            return res.json({message:"deleted successfully ! "});
        }catch(e){
            return res.status(403).json({error:e.message})
        }
    }

    async getAllFoods(req,res){
        try{
            // TO DO PAGINATION
            const x = await GetAllFoods()
            return res.json({message:x});
        }catch(e){
            return res.json({message:e.message})
        }
    }



    // TO FIX
     async getFoodByCategory(req,res){
        let {idCategory} = req.query;
        try{
            return res.json({message:await FoodByCategory(idCategory)});
        }catch(e){
            return res.json({message:e.message})
        }
    }

      async getFoodById(req,res){
        let {FoodId} = req.params;
        try{
            return res.json({message:await GetFoodById(FoodId)});
        }catch(e){
            return res.json({message:e.message})
        }
    }




}