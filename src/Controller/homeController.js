const path = require("path")
const homeView = (req,res) => {
    res.render("Home",{

    })
}
const LoadIcon = (req,res) => {
    res.status(200).sendFile(path.join(__dirname,"favicon.ico"))
}
module.exports = {
    homeView,
    LoadIcon
}