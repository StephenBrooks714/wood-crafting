const mongoose = require("mongoose");
const Schema = mongoose.Schema

const HomeArticleSchema = new Schema ({
    title: String,
    name: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: String,
    url: String,
    body: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const HomeArticle = mongoose.model('HomeArticle', HomeArticleSchema);
module.exports = HomeArticle;