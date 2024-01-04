const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AboutSchema = new Schema ({
    title: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: String,
    phone: String,
    email: String,
    about: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const About = mongoose.model('About', AboutSchema);
module.exports = About;