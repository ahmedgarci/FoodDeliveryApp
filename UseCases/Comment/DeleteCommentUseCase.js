const CommentsRepository = require("../../Repositories/Comments/CommentRepository")

module.exports = (CommentId)=>{
    try{
        return CommentsRepository.DeleteComment(CommentId)
    }catch(e){
        throw e.message
    }


}