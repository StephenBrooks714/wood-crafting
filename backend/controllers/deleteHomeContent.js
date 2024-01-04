// database
const deleteHomeContent = require('../models/HomeIntro')

module.exports = async (req, res) => {
    await deleteHomeContent.findByIdAndDelete(req.params.id)
    res.redirect('/')
}