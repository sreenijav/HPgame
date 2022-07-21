
var gameState="start"
var play;
var directions;
var a;
function preload(){

}
function setup(){
createCanvas(1200,1200)
 a=createSprite(50,50,50,50);
play=createSprite(550,550);
directions=createSprite(550,700);
a.visible=false;
play.visible=false;
  directions.visible=false;

}
function draw(){
  drawSprites();
  if(gameState==="start"){
    play.visible=true;
      directions.visible=true;
    if(mousePressedOver(play)){
     gameState="level_1";
    //  background("red");
    play.x=10000;
    directions.x=10000
    }
    if(mousePressedOver(directions)){
      gameState="direction";
      play.visible=false;
      directions.visible=false;
    }
  
  }
  //directions page
  if(gameState==="direction"){
    play.visible=false;
    directions.visible=false;
    text("Use arrow keys to move.",200,200);
    play.x=10000;
    directions.x=10000
  }
  //level one of the game- play and directions buttom are gone
  if(gameState==="level_1"){
   // play.visible=false;
    play.x=10000;
    directions.x=10000
    directions.visible=false;
   // background("orange");
    a.visible=true;
  }

}