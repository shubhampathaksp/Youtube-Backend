const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    channelName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    about: {
        type: String,
        require: true,
    },
    profilePic: {
        type: String,
        require: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema);