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
    score = 0;

//fonction

//Position Aleatoire pour food
const randomFood = () => {
    var foodPosition = {};
    return  foodPosition = {x : Math.floor(Math.random() * WIDTH / GRID_SIZE) * GRID_SIZE,
                            y : Math.floor(Math.random() * HEIGHT / GRID_SIZE ) * GRID_SIZE
                        }   
}
const tick = () => {
    var snakePart = {x : snake[0].x,y : snake[0].y};
    var axis = (Math.abs(direction) === 1) ? 'x' : 'y';
    if(direction < 0 ){
        snakePart[axis] -= GRID_SIZE;
    }else{
        snakePart[axis] += GRID_SIZE;
    }
    if(food && food.x === snakePart.x && food.y === snakePart.y){
        food = null;
        snakeLength += 2;
        score ++;
    }
}