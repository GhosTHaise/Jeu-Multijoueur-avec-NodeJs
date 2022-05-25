const express = require("express");
const {homeView,LoadIcon} = require("../Controller/homeController");
const Router = express.Router();

Router.get("/home",homeView);
Router.get("/favicon.ico",LoadIcon)
module.exports = Router;