import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCicle = new Circle(5, 10, 20);
console.log(myCicle.getInfo());

let myRectangle = new Rectangle(0,0,3,7);
console.log(myRectangle.getInfo());