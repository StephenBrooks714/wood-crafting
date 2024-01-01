const HomeBlogsDb = require("../models/ArticlePost");
const ProjectsDb = require("../models/Projects");
module.exports = async (req, res) => {
    const blogs = await HomeBlogsDb.find({}).limit(3).sort({_id: -1}).populate('userid');
    const projects = await ProjectsDb.find({}).limit(4).sort({_id: -1}).populate('userid');
    res.render("index", {
        title: "Home page for the wood crafting store.",
        blogs, projects
    })
}