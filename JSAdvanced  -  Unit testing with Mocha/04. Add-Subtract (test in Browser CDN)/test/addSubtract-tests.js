var expect = chai.expect;

describe("Test Add/Subtract object:", function() {
	let calc;
	beforeEach(function() {     //Mocha hook: called befor each test
		calc = createCalculator();
	}); 

	describe("Nominal cases (valid input)", function() {
		it ("01 Should return 5 after (add 3; add 2)", function() {
			calc.add(3);
			calc.add(2);
			expect(calc.get()).equal(5);
		});
		it ("02 Should return 15 after (add 10; add 5)", function() {
			calc.add(10);
			calc.add(5);
			expect(calc.get()).equal(15);
		});
		it ("03 Should return 8 after (add 10; add -2)", function() {
			calc.add(10);
			calc.add(-2);
			expect(calc.get()).equal(8);
		});
		it ("04 Should return 8 after (add 10; subtract 2)", function() {
			calc.add(10);
			calc.subtract(2);
			expect(calc.get()).equal(8);
		});
		it ("05 Should return -10 after (add 10; subtract 20)", function() {
			calc.add(10);
			calc.subtract(20);
			expect(calc.get()).equal(-10);
		});
		it ("06 Should return -10 after (add '10'; subtract '20')", function() {
			calc.add(10);
			calc.subtract(20);
			expect(calc.get()).equal(-10);
		});
		it ("07 Should return 0 after ()", function() {
			expect(calc.get()).equal(0);
		});
		it ("08 Should return -50000 after (subtract 50000)", function() {
			calc.subtract(50000);
			expect(calc.get()).equal(-50000);
		});
		it ("08 Should return -100 after (subtract 50; subtract 50)", function() {
			calc.subtract(50);
			calc.subtract(50);
			expect(calc.get()).equal(-100);
		});
		it ("09 Should return 200 after (add [200])", function() {
			calc.add([200]);
			expect(calc.get()).equal(200);
		});
	});	

	describe("Special cases (invalid input)", function() {
		it ("01 Should return NaN after (add [5, 5, 5])", function() {
			calc.add([5, 5, 5]);
			expect(calc.get()).equal.NaN;
		});
		it ("02 Should return NaN after (add {5:5})", function() {
			calc.add({5:5});
			expect(calc.get()).equal.NaN;
		});
		it ("03 Should return NaN after (add '2565DDDEEERR@-+')", function() {
			calc.add('2565DDDEEERR@-+');
			expect(calc.get()).equal.NaN;
		});
		it ("04 Should return NaN after (add '2565D')", function() {
			calc.add('2565D');
			expect(calc.get()).equal.NaN;
		});
		it ("05 Should return NaN after (add undefined)", function() {
			calc.add(undefined);
			expect(calc.get()).equal.NaN;
		});
		it ("06 Should return NaN after (add undefined; add 5)", function() {
			calc.add(undefined);
			calc.add(5);
			expect(calc.get()).equal.NaN;
		});
	});	
});