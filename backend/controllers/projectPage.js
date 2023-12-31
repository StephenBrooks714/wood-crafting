// db
const ProjectsDb = require('../models/Projects');

module.exports = async (req, res) => {
    const projects = await ProjectsDb.find({}).sort({_id: -1}).populate('userid')
    res.render("projects", {
        title: "Wood crafting projects page.",
        projects
    })
}