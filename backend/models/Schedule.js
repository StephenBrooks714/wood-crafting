const mongoose = require("mongoose");
const Schema = mongoose.Schema

const SchedulePostSchema = new Schema ({
    title: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    id: String,
    location: String,
    url: String,
    date: String,
    contact: String,
    feature: Array,
    detail: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const SchedulePost = mongoose.model('SchedulePost', SchedulePostSchema);
module.exports = SchedulePost;