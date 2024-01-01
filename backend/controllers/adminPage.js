// db
const AdminBlogsDb = require("../models/ArticlePost");
const ProjectsDb = require("../models/Projects");
const ScheduleDb = require("../models/Schedule");

module.exports = async (req, res) => {
    const blogs = await AdminBlogsDb.find({}).sort({_id: -1}).populate('userid');
    const projects = await ProjectsDb.find({}).sort({_id: -1}).populate('userid');
    const schedule = await ScheduleDb.find({}).sort({_id: -1}).populate('userid');
    res.render("admin", {
        title: "Admin panel for all post on website.",
        blogs, projects, schedule
    })
}