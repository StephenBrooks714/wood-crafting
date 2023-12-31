const mongoose = require("mongoose");
const Schema = mongoose.Schema

const HomeIntroPostSchema = new Schema ({
    title: String,
    subheading: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: false
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const HomeIntro = mongoose.model('HomeIntro', HomeIntroPostSchema);
module.exports = HomeIntro;