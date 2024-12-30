const Comment = require("../../Entities/Commentaires");
const FoodRepository = require("../Food/FoodRepository");

class CommentsRepository{
//TO FIX
    static async createComment({userId,comment}){
        try{
            const SavedComment = await Comment.create({user:userId,commentaire:comment})
            return SavedComment._id
        }catch(e){
            throw new Error("error occured while creating the comment ")
        }
    }

    static async PostComment({FoodId,Comment,userId}){
        try{
            var food = await FoodRepository.getFoodById(FoodId)
            const CommentId = await this.createComment({userId:userId,comment:Comment})
            food.comment.push(CommentId)
            await food.save()
        }catch(e){
            console.log(e);
        }
    }

    
    static async DeleteComment(commentId){
        try{
            const DeletedComment = await Comment.findByIdAndDelete(commentId)
            await DeletedComment.save()
        }catch(e){
            console.log(e);
        }
    }


}

module.exports = CommentsRepository