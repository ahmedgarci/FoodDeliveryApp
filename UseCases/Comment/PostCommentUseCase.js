const CommentsRepository = require("../../Repositories/Comments/CommentRepository")

module.exports = ({FoodId,userId,commentaire})=>{
    try{
        return CommentsRepository.PostComment({FoodId:FoodId,userId:userId,Comment:commentaire})
    }catch(e){
        throw e.message
    }


}