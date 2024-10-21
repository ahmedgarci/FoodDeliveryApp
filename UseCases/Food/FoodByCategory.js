const CategoryRepository = require("../../Repositories/Category/CategoryRepository")


module.exports = async(categoryName)=>{
    try{
        return await CategoryRepository.findFoodsByCategory(categoryName)
    }catch(e){
        throw new Error(e.message)
    }
}
