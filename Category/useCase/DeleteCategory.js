const CategoryRepository = require("../Entities/CategoryRepository")


module.exports = async(id)=>{
    try{
        await CategoryRepository.deleteCategory(id)
    }catch(e){
        throw e
    }
}