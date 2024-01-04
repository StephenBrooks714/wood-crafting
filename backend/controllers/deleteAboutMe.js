// database
const deleteAbout = require('../models/AboutMe')

module.exports = async (req, res) => {
    await deleteAbout.findByIdAndDelete(req.params.id)
    res.redirect('/')
}