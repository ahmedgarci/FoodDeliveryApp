
class CommentsController{

    async PostComment(req,res){
        try{
            const {id} = req.params;
            return await PostCommentUseCase({FoodId:id,userId:req.user.id})
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