const Category = require("../../Entities/CategoryEntity")

module.exports = class CategoryRepository{


    // TO DO 
    
    static async findFoodsByCategory(categoryName){
        try{
            return await Category.find({name:categoryName}).populate("foods")
            .orFail(new Error("no food found for that category"))
        }catch(e){
            throw new Error(e.message)
        }
        
    }
}