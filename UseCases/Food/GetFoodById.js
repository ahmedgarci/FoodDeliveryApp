const SingleFoodResponse = require("../../Infrastructure/DTO's/SingleFoodResponse");
const FoodRepository = require("../../Repositories/Food/FoodRepository")


module.exports = async(FoodId)=>{
    try{
        const FoodData = await FoodRepository.getFoodById(FoodId)
        return new SingleFoodResponse(FoodData._id,FoodData.name,FoodData.Price
            ,FoodData.description,FoodData.categoryName.name,FoodData.imageId.imageUrl);
    
    }catch(e){
        throw e
    }
}
