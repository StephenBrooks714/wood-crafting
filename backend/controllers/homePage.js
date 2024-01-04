const HomeBlogsDb = require("../models/ArticlePost");
const ProjectsDb = require("../models/Projects");
const HomeDb = require("../models/HomeIntro");
const HomeArticle = require("../models/HomeArticleSection");
const HomeSubscription = require("../models/HomeSubscription");
const HomeAbout = require("../models/AboutMe");

module.exports = async (req, res) => {
    const blogs = await HomeBlogsDb.find({}).limit(3).sort({_id: -1}).populate('userid');
    const projects = await ProjectsDb.find({}).limit(4).sort({_id: -1}).populate('userid');
    const home = await HomeDb.find({}).limit(1).sort({_id: -1}).populate('userid');
    const homeArticle = await HomeArticle.find({}).limit(1).sort({_id: -1}).populate('userid');
    const subscription = await HomeSubscription.find({}).limit(1).sort({_id: -1}).populate('userid');
    const about = await HomeAbout.find({}).limit(1).sort({_id: -1}).populate('userid');
    res.render("index", {
        title: "Home page for the wood crafting store.",
        blogs, projects, home, homeArticle, subscription, about
    })
}