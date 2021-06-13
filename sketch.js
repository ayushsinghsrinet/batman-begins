// Add matter.js first
// give the physics engines
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var raindrops = [];

var img;

var thunder1,thunder2 ,thunderImg1 , thunderImg2 , thunderImg3;
function preload(){
  thunder1 = loadImage("Image/1.png");
  thunder2 = loadImage("Image/2.png");
}

function setup(){
 
var canvas = createCanvas(1000,600);
  engine = Engine.create();
 world = engine.world;
 
thunderImg1 = createSprite(displayWidth/2,5,10,40);
thunderImg2 = createSprite(200,5,10,40);
thunderImg3 = createSprite(1100,5,10,40);

    img = new Umbrella(400,340);
}

function draw(){
  
    background(0);
  Engine.update(engine);
  
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -150,5);
      raindrops.push(raindrop);
    }

    img.display();

    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(30);
      raindrops[i].display();
    } 

    if(frameCount % 5 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg1.addImage(thunder2);
                break;
        default: break;
      }
    }   
  
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunderImg2.addImage(thunder1);
                  break;
          case 2: thunderImg2.addImage(thunder2);
                  break;
          default: break;
        }
      }   

  if(frameCount % 10 === 0) {
     var rand = Math.round(random(1,2));
          switch(rand) {
        case 1:thunderImg3.addImage(thunder1);
                  break;
        case 2: thunderImg3.addImage(thunder2);
                   break;
          default: break;
          }
        } 
  
    drawSprites();
}   

