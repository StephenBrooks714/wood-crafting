const mongoose = require("mongoose");
const Schema = mongoose.Schema

const HomeSubscriptionPostSchema = new Schema ({
    title: String,
    subheading: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const HomeSubscription = mongoose.model('HomeSubscription', HomeSubscriptionPostSchema);
module.exports = HomeSubscription;