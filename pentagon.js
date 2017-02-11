// requiring shape.js file access shape prototype
var Shape = require("./shape.js");

// creating pentagon constructor 
function Pentagon(type){
	this.type = type;
};

// inheriting shape prototype into Triangle constructor
Pentagon.prototype = Object.create(Shape.prototype);
// changing the constructor back to Triangle
Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon 