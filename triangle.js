
// requiring shape.js file access shape prototype
var Shape = ("./shape.js");

// creating triangle constructor 
function Triangle(side1, side2, side3){
	console.log(side1 + side2 + side3);
};

// inheriting shape prototype into Triangle constructor
Triangle.prototype = Object.create(Shape.prototype);
// changing the constructor back to Triangle
Triangle.prototype.constructor = Triangle;

module.exports = Triangle 
