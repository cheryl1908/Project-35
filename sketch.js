var dog,happyDog,foodS,foodStock,database;
var fedTime, lastFed

function preload()
{
  dogImg=loadImage("dogImg.png");
  dogHap=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  food=createButton("Feed the Dog");
  food.position(700,95);
  food.mousePressed(feedDog);
  addFood=createButton("add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);

  dog=createSprite(200,200)
  dog.addImage(dogImg);
  dog.scale=0.1;

  foodObj=new Food();
  
  database =firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

}

function feedDog(){
  dog.addImage(dogHap);
  if(foodObj.getFoodStock<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
   
    }
    database.ref('/').update({
      Food:foodObj.getFoodStock(),
      FeedTime:hour()
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
textSize(15);
  ref=database.ref('FeedTime');
  ref.on("value",function(data){
  lastFed=data.val();
})


if(lastFed>=12){
  text("last Feed :"+lastFed%12 +"pm",350,30);
}else if(lastFed=0){
}else{
  text("last Feed :"+lastFed +"am",350,30);
}
  foodObj.display();
  drawSprites();

}
function readStock(data){
  foodS=data.val();
}
