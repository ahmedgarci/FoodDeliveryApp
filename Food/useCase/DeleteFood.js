const FoodRepository = require("../entities/FoodRepository")


module.exports = async(id)=>{
    try{
       await FoodRepository.deleteFood(id)
    }catch(e){
        throw new Error(e.message)
    }


}