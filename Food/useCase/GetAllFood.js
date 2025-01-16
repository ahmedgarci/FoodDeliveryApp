const FoodRepository = require("../entities/FoodRepository")
module.exports = async()=>{

    try{         
        return await FoodRepository.getAllFood();
        }catch(e){
        throw e.message
    }
}