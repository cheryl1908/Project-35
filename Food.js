class Food{
    constructor(){
        this.milkBottleImg=loadImage("images/Milk.png");
        var foodStock,lastFed;
    }

    getFoodStock(){
        var FoodScockRef = database.ref('Food');
        FoodScockRef.on("value",function(data){
           gameState = data.val();
        })
    }
    updateFoodStock(){
        database.ref('/').update({
            foodStock: foodStock
          });
    }
    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.milkBottleImg,720,220,70,70);
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.milkBottleImg,x,y,50,50);
                x=x+30;
            }
        }
    }
}
