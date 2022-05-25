const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const favicon = require('serve-favicon')
const app  = new express();
const port = process.env.port || 5050; 
//Import Router

//
//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//
//Moteur de modele
app.set("views","./src/Views/")
app.set("view engine","ejs");
//
app.get('/favicon.ico', (req, res) => (
    res.status(200).sendFile('favicon.ico', {root: __dirname + '/static/'})
));
app.use(favicon(path.join(__dirname, '', 'favicon.ico')))
//Css asset
app.use("/style",express.static("./src/Views/assets/css"));
//
//js asset
app.use("/script",express.static("./src/Views/assets/script"));
//
//Route
app.use("/favicon.ico",express.static("./src/Views/assets/Icon/icons8-ghost-64.png"));
app.use("/home",require("./src/Route/home"));
//
//Asset  - Icon
app.use("/icon",express.static("./src/Views/assets/Icon"));
//


app.listen(port,()=>{
    console.log("application start on http://localhost:"+port);
})

module.exports = app;