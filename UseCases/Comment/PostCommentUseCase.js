const CommentsRepository = require("../../Repositories/Comments/CommentRepository")

module.exports = ({FoodId,userId})=>{
    try{
        return CommentsRepository.PostComment({FoodId:FoodId,userId:userId})
    }catch(e){
        throw e.message
    }


}