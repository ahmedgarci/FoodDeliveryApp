const Category = require("../../Entities/CategoryEntity")

module.exports = class CategoryRepository{

    // TO FIX
    static async findFoodsByCategory(categoryName){
        try{
            return await Category.find({name:categoryName}).populate("foods")
            .orFail(new Error("no food found for that category"))
        }catch(e){
            throw e
        }
        
    }

    static async getAllCategories(){
        try{
            return await Category.find()
            .select(["_id","name"])
            .orFail(()=>new Error("error while getting all categories"))
        }catch(e){
            throw e

        }
    }


    static async createNewCategory(name){
        try{
            const category = await Category.create({name:name})
            await category.save()
        }catch(e){
            throw e
        }
    }

    static async deleteCategory(id){
        try{
            await Category.findByIdAndDelete(id)
            .orFail(()=>new Error("oops category cannot be deleted"))
        }catch(e){
            throw e
        }
    }


}