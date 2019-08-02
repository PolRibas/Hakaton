`use strict`;

class Item{
    constructor(image, family, type, price, collection){
        this.imageIndex = image;
        this.image = '../' + image;
        this.family = family;
        this.type = type;
        this.price = price;
        this.collection = collection;
    }

    draw(){

    }

}