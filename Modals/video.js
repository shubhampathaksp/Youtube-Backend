const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    videoLink: {
        type: String,
        require: true,
    },
    thumbnail: {
        type: String,
        require: true,
    },
    videoType: {
        type: String,
        default: "All",
    },
    like: {
        type: Number,
        default: 0,
    },
    dislike: {
        type: Number,
        default: 0
    },
}, { timestamps: true })

module.exports = mongoose.model('video', videoSchema);
