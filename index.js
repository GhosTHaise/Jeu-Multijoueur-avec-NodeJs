const express = require("express");
const bodyParser = require("body-parser");
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
//Css asset
app.use("/style",express.static("./src/Views/assets/css"));
//
//js asset
app.use("/script",express.static("./src/Views/assets/script"));
//
//Route
app.use("/home",require("./src/Route/home"));
//
//Asset  - Icon
app.use("/icon",express.static("./src/Views/assets/Icon"));
//
app.get("/favicon.ico",(req,res) => {
    res.sendFile("/icon/icons8-ghost-64.png")
})

app.listen(port,()=>{
    console.log("application start on http://localhost:"+port);
})

module.exports = app;