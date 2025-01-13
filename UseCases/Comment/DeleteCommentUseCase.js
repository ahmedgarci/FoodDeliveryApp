const CommentsRepository = require("../../Repositories/Comments/CommentRepository")

module.exports = async({CommentId,userId})=>{
    try{
        const comment = await CommentsRepository.getComment(CommentId);
        if(comment.user._id == userId){
            await CommentsRepository.DeleteComment(CommentId)
            return;
        }
        throw new Error("oops u are not the author of the comment")
    }catch(e){
        throw e.message
    }


}