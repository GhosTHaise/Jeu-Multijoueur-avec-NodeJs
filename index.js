const express = require("express");
const bodyParser = require("body-parser");
const app  = new express();
const port = process.env.port || 4000; 
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
//Route
app.use("/",require("./src/Route/home"));
//

app.listen(port,()=>{
    console.log("application start on http://localhost:"+port);
})

