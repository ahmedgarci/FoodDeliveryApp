const FoodRepository = require("../../../Repositories/Food/FoodRepository")
const RedisService = require("../../../Infrastructure/Redis/RedisService")
module.exports = async()=>{
    const redisService = new RedisService();
    const cashingKey="allFoods";
    try{
         const cashedFoods = await redisService.getDataFromRedis(cashingKey)
        if(cashedFoods){
            return cashedFoods
        }
        var allFoods = await FoodRepository.getAllFoods();

        redisService.setDataIntoRedis({key:cashingKey,value:allFoods})

        return allFoods;
    
        }catch(e){
        throw new Error(e.message)
    }
}