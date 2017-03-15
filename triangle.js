
// requiring shape.js file access shape prototype
var Shape = require("./Shape.js");

// creating triangle constructor 
function Triangle(side1, side2, side3){
	console.log(side1 + side2 + side3);
	if (!(this instanceof Triangle)) {
    return new Triangle(side1, side2, side3);
  }
  	this.side1 = side1;
  	this.side2 = side2;
  	this.side3 = side3;
};

// inheriting shape prototype into Triangle constructor
Triangle.prototype = new Shape();
// changing the constructor back to Triangle
Triangle.prototype.constructor = Triangle;

module.exports = Triangle 
