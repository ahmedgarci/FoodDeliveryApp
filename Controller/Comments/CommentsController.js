const DeleteCommentRequestValidation = require("../../Infrastructure/RequestsValidation/CommentsRequests/DeleteCommentRequestValidation");
const PostCommentRequestValidation = require("../../Infrastructure/RequestsValidation/CommentsRequests/PostCommentRequestValidation");
const DeleteCommentUseCase = require("../../UseCases/Comment/DeleteCommentUseCase");
const PostCommentUseCase = require("../../UseCases/Comment/PostCommentUseCase");

class CommentsController {
    async PostComment(req, res) {
        try {
            const { id } = req.params;
            const { comment } = req.body;

            await PostCommentRequestValidation({ FoodId: id, Comment: comment });

            const result = await PostCommentUseCase({
                FoodId: id,
                userId: req.user.id,
                commentaire: comment,
            });

            return res.json(result);
        } catch (e) {
            console.error(e); 
            return res.status(400).json({ error: e.message });
        }
    }

    async DeleteComment(req, res) {
        try {
            const { id } = req.params;

            await DeleteCommentRequestValidation(id);

            await DeleteCommentUseCase({ CommentId: id, userId: req.user.id });

            return res.json({ message: "Comment deleted!" });
        } catch (e) {
            console.error(e);  // Log the error for debugging purposes
            return res.status(400).json({ error: e.message });
        }
    }
}

module.exports = CommentsController;
