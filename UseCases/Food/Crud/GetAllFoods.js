const FoodRepository = require("../../../Repositories/Food/FoodRepository")

module.exports = async()=>{
    try{
        return await FoodRepository.getAllFoods();
    }catch(e){
        throw new Error(e.message)
    }
}