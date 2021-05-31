var catImg,catImg2,cat;
var mouseImg,mouse;
var backg1Img,backg1;
var mouseImg,mouseimg2,mouse,mouseImg3;


function preload() {
    //load the images here
    backg1Img = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);

    backg1 = createSprite(500,400,10,10);
    backg1.addAnimation("background",backg1Img);

    //create tom and jerry sprites here
   cat = createSprite(800,600,10,10);
   cat.addAnimation("cat",catImg);
   cat.addAnimation("catImg2",catImg2);
   cat.addAnimation("catImg3",catImg3);
   cat.scale = 0.1;
   
   mouse = createSprite(300,600,10,10);
   mouse.addAnimation("mouseImg",mouseImg);
   mouse.addAnimation("mouseImg2",mouseImg2);
   mouse.scale = 0.09;



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
     
    keyPressed();
    drawSprites();
}


function keyPressed(){
   
  //For moving and changing animation write code here
cat.velocityX = 0;
  if(keyCode === LEFT_ARROW ){
  cat.velocityX = -3;
  cat.changeAnimation("catImg2",catImg2);
  mouse.changeAnimation("mouseImg2",mouseImg2);
  
  }
  

}
