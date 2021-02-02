var dog,happyDog,foodS,foodStock,database;
var fedTime, lastFed

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  dogHap=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  food=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);

  dog=createSprite(200,200)
  dog.addImage(dogImg);
  dog.scale=0.1;
  
  database =firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHap);
}
}

function feedDog(){
  dog.addImage(hppyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    foodTime:hour()
  })
}

function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}


function draw() {  
  background(46,139,87);
  fill(255,255,254);
textSixe(15);
if(lastFed>=12){
  text("last Feed :"+lastFeed%12 +"pm",350,30);
}else if(lastFed=0){
}else{
  text("last Feed :"+lastFeed +"am",350,30);
}
  display();
  drawSprites();

}
function readStock(){
  foodS=database.val;
}
function writeStock(){
  database.ref('/').update({
    Food:x
  })
}