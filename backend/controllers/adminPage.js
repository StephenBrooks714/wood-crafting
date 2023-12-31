// db
const AdminBlogsDb = require("../models/ArticlePost");

module.exports = async (req, res) => {
    const blogs = await AdminBlogsDb.find({}).sort({_id: -1}).populate('userid')
    res.render("admin", {
        title: "Admin panel for all post on website.",
        blogs
    })
}