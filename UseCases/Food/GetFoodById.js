const FoodRepository = require("../../Repositories/Food/FoodRepository")


module.exports = async(FoodId)=>{
    try{
        return await FoodRepository.getFoodById(FoodId)
    }catch(e){
        throw e
    }
}
