var galaxy, galaxyImage
var player, playerImage

function preload(){
  playerImage = loadImage("./assets/human.png")
  galaxyImage = loadImage("./assets/bg1.jpg")
}

function setup(){

  createCanvas(400, 800)

  galaxy = createSprite(width/2, height/2, width, height)
  galaxy.addImage(galaxyImage)
  galaxy.velocityY = 3

  player = createSprite(200, 700, 10, 10)
  player.addImage(playerImage)
  player.scale = 0.3




}

function draw(){
  
  background("white")

  if(galaxy.y > 630){

    galaxy.y = height/2
  }

  if(keyDown("left")){
    player.x = player.x - 5
  }

  if(keyDown("right")){
    player.x = player.x + 5
  }


  drawSprites()
}





