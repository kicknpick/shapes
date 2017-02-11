
// create shape constructor
function Shape(type){
	this.type = type;
};

// create 
Shape.prototype.get_type = function(type){
	return this.constructor;
};



// allow other files to access shape.js
module.exports = Shape