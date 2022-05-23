const express = require("express");
const {homeView} = require("../Controller/homeController");
const Router = express.Router();

Router.get("/",homeView);

module.exports = Router;