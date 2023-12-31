const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ReviewPostSchema = new Schema ({
    fullName: String,
    jobTitle: String,
    image: {
        type: String,
        required: false
    },
    body: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const ReviewPost = mongoose.model('ReviewPost', ReviewPostSchema);
module.exports = ReviewPost;