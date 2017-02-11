// requiring shape, square, triangle and pentagon file to access constructors and propterties of each shape
var Shape = require("./shape.js");
var Triangle = require("./triangle.js");
var Square = require("./square.js");
var Pentagon = require("./pentagon.js");

// create new shapes using constructors
var sha = new Shape();
var tri = new Triangle(1,2,3);
var squ = new Square(5);
var pen = new Pentagon();

var shapesArray = [Shape, Triangle, Square, Pentagon];

var newShapesArray = [sha, tri, squ, pen];

for (var i = 0; i < newShapesArray.length; i++){
	console.log(" get_type: " + newShapesArray[i].get_type);

	for (var j = 0; j < shapesArray.length; j++){
		console.log(newShapesArray[i] instanceof shapesArray[j]);
	};
};
