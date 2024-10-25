const CategoryRepository = require("../../Repositories/Category/CategoryRepository")


module.exports = async()=>{

    try{
        await CategoryRepository.getAllCategories();
    }catch(e){
        throw e
    }

}