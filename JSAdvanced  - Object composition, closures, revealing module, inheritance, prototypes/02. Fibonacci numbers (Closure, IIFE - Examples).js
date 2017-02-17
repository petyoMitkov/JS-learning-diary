//EXAMPLES - Closure, IIFE, Fibonacci Numbers

//Closure
function counterClosure() {
	let counter = 0;
	function addFive() {
		console.log(counter += 5);
	}
	return addFive;
}
let newCounter = counterClosure();

//Closure + IIFE
let counter = (function(start) {
	let num = start;
	return function() {
		console.log(++num);
	}
})(10);

//Fibonachi Numbers 
let fibonacci = (function() {
	let lastNum1 = 0;
	let lastNum2 = 1;
	return function() {
		let next = lastNum1 + lastNum2;
		console.log(next);
		lastNum1 = lastNum2;
		lastNum2 = next; 
	}
})();