const RedisConfig = require("./RedisConfig")

module.exports = class RedisService{


    async getDataFromRedis(key){
        return await RedisConfig.get(key)
    }

    async setDataIntoRedis({key,value}){
        return await RedisConfig.set(key,value,{ex:300})
    }


}