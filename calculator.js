function initialize() {
	matrixDiv = document.getElementById('inputs');
    resultDiv = document.getElementById('result');
    
    changeSize(2);
}

function changeSize(size) {
    matrixDiv.innerHTML = "";

	for (let i = 0; i < size; i++) {
		let row = document.createElement("div");
		row.className = "row";
		matrixDiv.appendChild(row);
		for (let j = 0; j < size; j++) {
			let column = document.createElement("input");
			column.type = "number";
			column.className = "column";
			row.appendChild(column);
		}
	}
}