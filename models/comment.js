const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
    comment: {
        type: String
    }
});

module.exports = mongoose.model('Comment', commentSchema, 'comments');