"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myShape = new shape_1.Shape(10, 15);
console.log(myShape.getInfo());
var myCicle = new circle_1.Circle(5, 10, 20);
console.log(myCicle.getInfo());
var myRectangle = new rectangle_1.Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());
