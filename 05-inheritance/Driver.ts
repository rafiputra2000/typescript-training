import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";
import { Shape } from "./Shape";


let myShape = new Shape(10, 5);
console.log(myShape.getInfo());


let myCircle = new Circle(10, 12, 5);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 12, 15)
console.log(myRectangle.getInfo());

