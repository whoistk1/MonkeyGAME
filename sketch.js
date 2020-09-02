var banana,stone,monkey;
var bananaImage,obstacleImage, obstacleGroup,background, score,backImage,player_running;

function preload() {
 backImage = loadImage("jungle.jpg"); 
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  background = createSprite(200,200,400,400);
  background.addImage(backImage);
  
  banana = createSprite (200,200,10,10);
}

function draw() {
  //background(220);
  drawSprites();
}