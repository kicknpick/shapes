// requiring shape, square, triangle and pentagon file to access constructors and propterties of each shape
var Shape = require("./Shape.js");
Triangle = require("./Triangle.js");
Square = require("./Square.js");
Pentagon = require("./Pentagon.js");

// create new shapes using constructors
var triangle = new Triangle(1, 2, 3);
var square = new Square(2);
var pentagon = new Pentagon(2, 4, 6, 8, 10);
var shape = new Shape();


// testing the type
console.log(triangle.get_type());
console.log(square.get_type());
console.log(pentagon.get_type());
console.log(shape);



// testing the instanceOf
console.log(triangle instanceof Triangle);
console.log(square instanceof Square);
console.log(pentagon instanceof Pentagon);
console.log(shape instanceof Shape);
