class Food{
    constructor(){
        this.milkBottleImg=loadImage("Milk.png");
        this.foodStock=0;
        this.lastFed=0;
    }

    getFoodStock(){
       return this.foodStock;
    }
    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock-=1;
        }
    }
    getFedTime(lastfed){
        this.lastFed=lastfed;
    }
    display(){
        console.log(this.foodStock)
        var x=80,y=100;
        imageMode(CENTER);
        //image(this.milkBottleImg,720,220,70,70);
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