var cleiton, cleitonImg;
var bordas;

function preload(){
  //pre carrega arquivos

  cleitonImg = loadAnimation("trex1.png","trex2.png");

}

function setup(){
  createCanvas(600,200);

  //propriedades do cleiton
  cleiton = createSprite(50,100,20,20);
  cleiton.addAnimation("run",cleitonImg);
  cleiton.scale = 0.5;

  bordas = createEdgeSprites();
}

function draw(){
  background('white');

  cleiton.velocityY = cleiton.velocityY + 1;

  if (keyDown("space")){
    cleiton.velocityY = -10;
  }

  cleiton.collide(bordas);


  drawSprites();
}


