//Example - Modul Pattern (with Closure)
let module = (function() {
	let counter = 0;
	return {
		increase: (num) => counter += num,
		decrease: (num) => counter -= num,
		value: () => counter
	}
})();


//Revealing Module Pattern(with Closure)
let revModule = (function() {
	let count = 0;
	function change(amount) {count += amount; }
	function increase(num) {return change(num); }
	function decrease(num) {return change(-num); }
	function value() {return count; }
	return {increase, decrease, value};
})();

console.log(revModule.value());
console.log(revModule.increase(200));
console.log(revModule.value());



