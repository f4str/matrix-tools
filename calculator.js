function initialize() {
	matrixSize = document.getElementById("size");
	matrixDiv = document.getElementById("inputs");
	resultDiv = document.getElementById("result");
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

//in progress
function discriminant(arr) {
	if (arr.length == 0)
		return 0;
	else if (arr.length == 1)
		return arr[0];
	else if (arr.length == 2)
		return arr[0][0] * arr[1][1] - arr[0][1] * arr[1][0];
	else {
		sign = true;
		sum = 0;
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[i].length; j++) {
				var mini = createMatrix(arr, i, j);
				if (sign)
					sum += discriminant(mini);
				else
					sum -= discriminant(mini);
				!sign;
			}
		}
		return sum;
	}
}

function createMatrix(arr, row, col) {
	var mini = [];
	for (var i = 0; i < arr.length; i++) {
		var temp = [];
		for (var j = 0; j < arr[i].length; j++) {
			if (i != row && j != col)
				temp[j] = arr[i][j];
		}
		mini[i] = temp;
	}
	return mini;
}

function calculate() {
	matrix = [];
	var rows = document.getElementsByClassName("row");
	for (var i = 0; i < rows.length; i++) {
		var columns = rows[i].getElementsByClassName("column");
		var temp = [];
		for (var j = 0; j < columns.length; j++) {
			temp[j] = columns[j].value;
		}
		matrix[i] = temp;
	}
	
	var det = discriminant(matrix);
	resultDiv.innerHTML = "Determinant: " + det;
}