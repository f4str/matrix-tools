function initialize() {
	inputs = document.getElementById('inputs');
	results = document.getElementById('result');

	changeSize(2);
}

function changeSize(size) {
	inputs.innerHTML = "";

	for (let i = 0; i < size; i++) {
		let row = document.createElement('div');
		row.className = "row";
		inputs.appendChild(row);
		for (let j = 0; j < size; j++) {
			let column = document.createElement('input');
			column.type = "number";
			column.className = "column";
			column.value = 0;
			row.appendChild(column);
		}
	}
}

function calculate() {
	let options = document.getElementsByName('options');
	let operation = 0; 
	for (let i = 0; i < options.length; i++) {
		if (options[i].checked) {
			operation = parseInt(options[i].value);
			break;
		}
	}
	
	matrix = [];
	let rows = inputs.getElementsByClassName('row');
	for (let i = 0; i < rows.length; i++) {
		let columns = rows[i].getElementsByClassName('column');
		let row = [];
		for (let j = 0; j < columns.length; j++) {
			row[j] = parseFloat(columns[j].value);
		}
		matrix[i] = row;
	}
	
	switch(operation) {
		case 0:
			alert('Select an option');
			break;
		case 1: 
			break;
		case 2:
			break;
		case 3: 
			break;
		case 4: 
			break;
		case 5: 
			trace();
			break;
		case 6: 
			break;
		case 7: 
			break; 
		case 8: 
			break;
		case 9: 
			break;
		default:
			alert('not implemented');
	}
}

function trace() {
	let sum = 0;
	for (let i = 0; i < matrix.length; i++) {
		sum += matrix[i][i];
	}
	results.innerHTML = "<hr>";
	// let hr = document.createElement('hr');
	// results.appendChild(hr);
	let text = document.createElement('div');
	text.innerHTML = "Trace: " + sum;
	results.appendChild(text);
}