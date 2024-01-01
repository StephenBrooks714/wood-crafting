// database
const ScheduleDb = require('../models/Schedule');

module.exports = async (req, res) => {
    const schedule = await ScheduleDb.find({}).sort({_id: -1}).populate('userid')
    res.render("schedule", {
        title: "Schedule page from wood crafting",
        schedule
    })
}