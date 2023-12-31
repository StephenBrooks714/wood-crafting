const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ProjectPostSchema = new Schema ({
    title: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: String,
    image2: String,
    summary: String,
    feature: Array,
    detail: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const ProjectPost = mongoose.model('ProjectPost', ProjectPostSchema);
module.exports = ProjectPost;