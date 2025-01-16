const Comment = require("./Commentaires");
const FoodRepository = require("../../Food/entities/FoodRepository");

class CommentsRepository{

    static async getComment(commentId){
        try{
            const comment = await Comment.findById(commentId).populate("user")
            return comment;
        }catch(e){
            throw new Error("cannot get comment with id"+commentId)            
        }
    }    

    static async createComment({userId,comment}){
        try{
            const SavedComment = await Comment.create({user:userId,commentaire:comment})
            return SavedComment._id;
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
            throw new Error("error occured while saving food comment")
        }
    }

    
    static async DeleteComment(commentId){
        try{
            const DeletedComment = await Comment.findByIdAndDelete(commentId)
        }catch(e){
            throw new Error("error occured while deleting food comment")            
        }
    }


}

module.exports = CommentsRepository