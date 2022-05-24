"use strict"
const cvs = document.getElementById('MainCanvas');
const ctx = cvs.getContext('2d');

//initialiser le grid
const WIDTH = cvs.width,
      HEIGHT = cvs.height,
      NOMBRE_GRID = 5000,
      GRID_SIZE = Math.sqrt((WIDTH*HEIGHT)/NOMBRE_GRID);
//alert("width : "+WIDTH+" | height : "+HEIGHT+" | grid_size : "+GRID_SIZE);
ctx.scale(2,2);
//Snake 
var direction = newDirection = 1,
    snakeLength = 5,
    snake = [{x : WIDTH / 2,y : HEIGHT / 2}],
    food = null,
    end = false,
    score = 0

