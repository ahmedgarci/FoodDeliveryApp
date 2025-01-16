const CategoryRepository = require("../Entities/CategoryRepository")


module.exports = async()=>{

    try{
        return await CategoryRepository.getAllCategories();
    }catch(e){
        throw e
    }

}