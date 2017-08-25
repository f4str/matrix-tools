function initialize() {
	matrixSize = document.getElementById("size");
	matrixDiv = document.getElementById("inputs");
	resultDiv = document.getElementById("result");
	
	changeSize(2);
}

function changeSize(size) {
	matrixDiv.innerHTML = "";
	
	for (var i = 0; i < size; i++) {
		var theDiv = document.createElement("div");
		theDiv.className = "row";
		matrixDiv.appendChild(theDiv);
		for (var j = 0; j < size; j++) {
			var theInput = document.createElement("input");
			theInput.type = "number";
			theInput.className = "column";
			theDiv.appendChild(theInput);
		}
	}
}

function determinant(arr) {
	if (arr.length == 2)
		return arr[0][0] * arr[1][1] - arr[0][1] * arr[1][0];
	else if (arr.length == 3) {
		var a = arr[0][0];
		var b = arr[0][1];
		var c = arr[0][2];
		var d = arr[1][0];
		var e = arr[1][1];
		var f = arr[1][2];
		var g = arr[2][0];
		var h = arr[2][1];
		var i = arr[2][2];
		return a*(e*i - f*h) - b*(d*i - f*g) + c*(d*h - e*g);
	}
	else 
		return 0;
}

function calculate() {
	var matrix = [];
	var rows = document.getElementsByClassName("row");
	for (var i = 0; i < rows.length; i++) {
		var columns = rows[i].getElementsByClassName("column");
		var temp = [];
		for (var j = 0; j < columns.length; j++) {
			temp[j] = columns[j].value;
		}
		matrix[i] = temp;
	}
	var det = determinant(matrix);
	
	resultDiv.innerHTML = "Determinant: " + det;
}