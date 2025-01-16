const Category = require("../Entities/CategoryEntity")

module.exports = class CategoryRepository{

    static async checkIfCategoryExists(categoryName){
        try{
            const Exist =  await Category.findOne({name:categoryName})
            return !!Exist
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