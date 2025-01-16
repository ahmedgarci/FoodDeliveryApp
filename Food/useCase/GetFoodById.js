const CommentResponse = require("../../Infrastructure/Responses/CommentResponse");
const SingleFoodResponse = require("../../Infrastructure/Responses/SingleFoodResponse");
const { ChangeDateFormat } = require("../../Infrastructure/Date-FNS/ChangeDateFormat");
const FoodRepository = require("../entities/FoodRepository")


module.exports = async(FoodId)=>{
    try{
        const FoodData = await FoodRepository.getFoodById(FoodId)
        var AllComments = FoodData.comment.map(element => new CommentResponse(element._id,
             element.user.username,ChangeDateFormat(element.createdAt),element.commentaire)) 
            
        return new SingleFoodResponse(FoodData._id,FoodData.name,FoodData.Price
            ,FoodData.description,FoodData.categoryName.name,FoodData.imageId.imageUrl,
            AllComments);
    
    }catch(e){
        throw e
    }
}
