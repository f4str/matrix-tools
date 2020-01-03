class Matrix {
	constructor(matrix, augment = null) {
		this.matrix = matrix;
		this.size = matrix.length;
		this.augment = augment;
	}
	
	trace() {
		let sum = 0;
		for (let i = 0; i < this.size; i++) {
			sum += this.matrix[i][i];
		}
		return sum;
	}
	
	power(n) {
		
	}
}