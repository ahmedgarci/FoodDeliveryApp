const CategoryRepository = require("../../Repositories/Category/CategoryRepository")


module.exports = async(categoryName)=>{
    try{
        await CategoryRepository.createNewCategory(categoryName);
    }catch(e){
        throw e
    }


}