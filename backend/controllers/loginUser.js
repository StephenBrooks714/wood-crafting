// database
const bcrypt = require('bcrypt')
const User = require('../models/Users')

module.exports = (req,res) =>{
    const { username,password } = req.body

    User.findOne({username: username},function(error,user){
        if(user){
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same){
                    req.session.userId = user._id
                    res.redirect('/admin')
                }
                else{
                    res.redirect('/login')
                }
            })
        }
        else{
            console.log("/::",user)
            res.redirect('/login')
        }
    })
}