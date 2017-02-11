// requiring shape.js file access shape prototype
var Shape = require("./shape.js");

// inheriting Shape prototype and creating Square constructor
function Square(all_sides){
	console.log(all_sides);
};

//inheriting Shape prototypes 
Square.prototype = Object.create(Shape.prototype);
// changing the constructor back to Square 
Square.prototype.constructor = Square;

module.exports = Square  
