"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myCicle = new circle_1.Circle(5, 10, 20);
var myRectangle = new rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shapes ... initally empty
var theShapes = [];
// add the shapes to the array
theShapes.push(myCicle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
