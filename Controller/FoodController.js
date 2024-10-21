const { createNewFood, deleteFood } = require("../Repositories/Food/FoodRepository");
const FoodByCategory = require("../UseCases/Food/FoodByCategory");
const GetAllFoods = require("../UseCases/Food/Crud/GetAllFoods");

module.exports = class FoodController{

    static async RegisterFood(req,res){
        try{
            // TO DO CATEGORY
            let {price,name,description,imageId} = req.body;
            await createNewFood({_price:price,_name:name,_description:description,
                _imageId:imageId,
                _categoryId:"67143fbbbbdd573cdca103e4"});  
            return res.json({message:"new food was created :"+name});
        }catch(e){
            return res.json({message:e.message})
        }
    }

    static async deleteSpecificFood(req,res){
        try{
            let {id} = req.query;
            await deleteFood(id);
            return res.json({message:"deleted successfully ! "});
        }catch(e){
            return res.json({message:e.message})
        }
    }

    static async getAllFoods(req,res){
        try{
            // TO DO PAGINATION
            const x = await GetAllFoods()
            return res.json({message:"Foods : "+ x});
        }catch(e){
            return res.json({message:e.message})
        }
    }

    // TO FIX
    static async getFoodByCategory(req,res){
        try{
            let {idCategory} = req.query;
            return res.json({message:await FoodByCategory(idCategory)});
        }catch(e){
            return res.json({message:e.message})
        }
    }




}