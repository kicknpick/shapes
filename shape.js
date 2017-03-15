
// create shape constructor
function Shape(){
	this.type = "shape";
}

// create 
Shape.prototype.get_type = function get_type(){
	return this.constructor;
};



// allow other files to access shape.js
module.exports = Shape;