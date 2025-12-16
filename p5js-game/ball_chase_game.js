//ball catch


var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1"
var pika, pTown, oFieldlands, lCity;

function preload() {
  pika = loadImage('https://raw.githubusercontent.com/ag829/ag829.github.io/refs/heads/main/images/spika.png');
  pTown = loadImage('https://raw.githubusercontent.com/ag829/ag829.github.io/refs/heads/main/images/pt.png');
  oFieldlands = loadImage('https://raw.githubusercontent.com/ag829/ag829.github.io/refs/heads/main/images/of.png');
  lCity = loadImage('https://raw.githubusercontent.com/ag829/ag829.github.io/refs/heads/main/images/lc.png');
}

function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);
} // end of setup


function draw() {
background(220);
if(gameState == "L1"){
 levelOne();
}
if(gameState == "L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
if(gameState == "win"){
  winGame();
}

text(("Score: " + score), width/2, 40);
} // end of draw

function levelOne(){
  background(pTown);
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 5){
    gameState = "L2"
  }
  
  image(pika, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
} // end of level 1

function levelTwo(){
  background(oFieldlands);
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 10){
    gameState = "L3"
  }
  //line(ballx, bally, mouseX, mouseY);
  
  image(pika, ballx-ballSize/2, bally-ballSize/2, ballSize-15, ballSize-15);
} // end of level 2

function levelThree(){
  background(lCity);
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 5;
  }
  if(score >= 18){
    gameState = "win";
  }

  //line(ballx, bally, mouseX, mouseY);
  
  image(pika, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} // end of level 3

function winGame(){
  textSize(60);
  text("You Won", width/2, height/2);
} // end win Game
