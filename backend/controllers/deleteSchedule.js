// database
const deleteSchedule = require('../models/Schedule')

module.exports = async (req, res) => {
    await deleteSchedule.findByIdAndDelete(req.params.id)
    res.redirect('/schedule')
}