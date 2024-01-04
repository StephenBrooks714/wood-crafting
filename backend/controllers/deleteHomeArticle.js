// database
const deleteHomeArticle = require('../models/HomeArticleSection')

module.exports = async (req, res) => {
    await deleteHomeArticle.findByIdAndDelete(req.params.id)
    res.redirect('/admin')
}