const PostCommentUseCase = require("../../UseCases/Comment/PostCommentUseCase");

class CommentsController{
    // TO FIX
    async PostComment(req,res){
        try{
            const {id} = req.params;
            const {comment} = req.body
            return await PostCommentUseCase({FoodId:id,userId:req.user.id,commentaire:comment})
        }catch(e){
            console.log(e);
        }
    }

    //TO DO
    async DeleteComment(req,res){
        try{
            const {id} = req.params;
            return await DeleteCommentUseCase(id)
        }catch(e){
            console.log(e);
        }
    }



}

module.exports = CommentsController