const StoreScheduleDB = require('../models/Schedule');

module.exports = async (req, res) => {
    await StoreScheduleDB.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/schedule')
}