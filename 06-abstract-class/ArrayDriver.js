"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var myCircle = new Circle_1.Circle(10, 12, 5);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 12, 15);
//adding array
var myArrayShape = [];
//push item in array 
myArrayShape.push(myCircle);
myArrayShape.push(myRectangle);
console.log(myArrayShape);
for (var _i = 0, myArrayShape_1 = myArrayShape; _i < myArrayShape_1.length; _i++) {
    var myShape = myArrayShape_1[_i];
    console.log("isi dari myShape", myShape);
    console.log(myShape.getInfo());
    console.log(myShape.calculateArea());
}
