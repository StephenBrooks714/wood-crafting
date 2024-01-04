// db
const AdminBlogsDb = require("../models/ArticlePost");
const ProjectsDb = require("../models/Projects");
const ScheduleDb = require("../models/Schedule");
const AdminHomeDb = require("../models/HomeIntro");
const AdminHomeArticle = require("../models/HomeArticleSection");
const AdminHomeSubscription = require("../models/HomeSubscription");

module.exports = async (req, res) => {
    const blogs = await AdminBlogsDb.find({}).sort({_id: -1}).populate('userid');
    const projects = await ProjectsDb.find({}).sort({_id: -1}).populate('userid');
    const schedule = await ScheduleDb.find({}).sort({_id: -1}).populate('userid');
    const home = await AdminHomeDb.find({}).limit(1).sort({_id: -1}).populate('userid');
    const homeArticle = await AdminHomeArticle.find({}).limit(1).sort({_id: -1}).populate('userid');
    const subscription = await AdminHomeSubscription.find({}).limit(1).sort({_id: -1}).populate('userid');
    res.render("admin", {
        title: "Admin panel for all post on website.",
        blogs, projects, schedule, home, homeArticle, subscription
    })
}