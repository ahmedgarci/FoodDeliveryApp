
class CommentResponse{
    constructor(commentId,username,dateOfCreation,comment) {
        this._id = commentId;
        this._username = username;
        this._comment = comment;
        this._dateOfCreation= dateOfCreation
    }
}

module.exports = CommentResponse