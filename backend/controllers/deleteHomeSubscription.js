// database
const deleteHomeSubscription = require('../models/HomeSubscription')

module.exports = async (req, res) => {
    await deleteHomeSubscription.findByIdAndDelete(req.params.id)
    res.redirect('/admin')
}