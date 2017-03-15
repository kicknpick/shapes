// requiring shape.js file access shape prototype
var Shape = require("./Shape.js");

// creating pentagon constructor 
function Pentagon(side1, side2, side3, side4, side5){
	if (!(this instanceof Pentagon)) {
    return new Pentagon(side1, side2, side3, side4, side5);
  }

  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
  this.side5 = side5;
};

// inheriting shape prototype into Triangle constructor
Pentagon.prototype = new Shape();
// changing the constructor back to Triangle
Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon 