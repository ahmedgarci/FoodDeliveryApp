const CategoryRepository = require("../Entities/CategoryRepository")


module.exports = async(categoryName)=>{
    try{
        let Exists = await CategoryRepository.checkIfCategoryExists(categoryName)
        if(Exists){
            throw new Error("category Already Exists")
        }
        await CategoryRepository.createNewCategory(categoryName);
    }catch(e){
        throw e.message
    }


}