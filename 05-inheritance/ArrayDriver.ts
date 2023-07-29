import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";
import { Shape } from "./Shape";


let myShape = new Shape(10, 5);
let myCircle = new Circle(10, 12, 5);
let myRectangle = new Rectangle(0, 0, 12, 15);

//adding array
let myArrayShape: Shape[] = [];

//push item in array 
myArrayShape.push(myShape);
myArrayShape.push(myCircle);
myArrayShape.push(myRectangle);

console.log(myArrayShape);

for (let myShape of myArrayShape) {
    console.log(myShape);
}



