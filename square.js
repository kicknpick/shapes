// requiring shape.js file access shape prototype
var Shape = require("./Shape.js");

// inheriting Shape prototype and creating Square constructor
function Square(all_sides){
	console.log(all_sides);
	if (!(this instanceof Square)) {
    return new Square(all_sides);
  }
	this.all_sides = all_sides
};

//inheriting Shape prototypes 
Square.prototype = new Shape();
// changing the constructor back to Square 
Square.prototype.constructor = Square;

module.exports = Square  
