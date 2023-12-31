// database
const SingleProjectDB = require('../models/Projects')

module.exports = async (req, res) => {
    const project = await SingleProjectDB.findById(req.params.id).populate('userid')
    res.render("singleProject", {
        title: "Project post details for more details about the project.",
        project
    })
}