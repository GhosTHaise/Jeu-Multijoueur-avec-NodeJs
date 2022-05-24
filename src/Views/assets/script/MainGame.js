"use strict"
const cvs = document.getElementById('MainCanvas');
const ctx = cvs.getContext('2d');

//initialiser le grid
const WIDTH = cvs.width;
const HEIGHT = cvs.height;
const NOMBRE_GRID = 5000;
const GRID_SIZE = Math.sqrt((WIDTH*HEIGHT)/NOMBRE_GRID);
//alert("width : "+WIDTH+" | height : "+HEIGHT+" | grid_size : "+GRID_SIZE);
ctx.scale(2,2);
//Snake 
