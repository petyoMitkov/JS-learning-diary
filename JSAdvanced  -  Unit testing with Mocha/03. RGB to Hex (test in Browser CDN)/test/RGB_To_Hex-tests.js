var expect = chai.expect;

describe("Test RGB to Hex Color:", function() {
	describe("Positive tests", function() {
		it ("01 Should return '#FFFFFF' for (255, 255, 255)", function() {
			expect(rgbToHexColor(255, 255, 255)).equal("#FFFFFF");
		});
		it ("02 Should return '#000000' for (0, 0, 0)", function() {
			expect(rgbToHexColor(0, 0, 0)).equal("#000000");
		});
		it ("03 Should return '#FFDC5E' for (255, 220, 94)", function() {
			expect(rgbToHexColor(255, 220, 94)).equal("#FFDC5E");
		});	
	});	
	describe("Negative tests", function() {
		it ("01 Should return 'undefined' for (256, 220, 94)", function() {
			expect(rgbToHexColor(256, 220, 94)).equal(undefined);
		});
		it ("02 Should return 'undefined' for (255, 256, 94)", function() {
			expect(rgbToHexColor(255, 256, 94)).equal(undefined);
		});
		it ("03 Should return 'undefined' for (255, 255, 256)", function() {
			expect(rgbToHexColor(255, 255, 256)).equal(undefined);
		});
		////////////////////
		it ("04 Should return 'undefined' for (-1, 255, 255)", function() {
			expect(rgbToHexColor(-1, 255, 255)).equal(undefined);
		});
		it ("05 Should return 'undefined' for (1, -1, 255)", function() {
			expect(rgbToHexColor(1, -1, 255)).equal(undefined);
		});
		it ("06 Should return 'undefined' for (1, 1, -1)", function() {
			expect(rgbToHexColor(1, 1, -1)).equal(undefined);
		});
		it ("07 Should return 'undefined' for (-1, -1, -1)", function() {
			expect(rgbToHexColor(-1, -1, -1)).equal(undefined);
		});
		/////////////////////
		it ("08 Should return 'undefined' for ('5', '4', '2')", function() {
			expect(rgbToHexColor('5', '4', '2')).equal(undefined);
		});
		it ("09 Should return 'undefined' for (['5', '4', '2'])", function() {
			expect(rgbToHexColor(['5', '4', '2'])).equal(undefined);
		});
		it ("10 Should return 'undefined' for ('5', '4', {8:10})", function() {
			expect(rgbToHexColor('5', '4', {8:10})).equal(undefined);
		});
		it ("11 Should return 'undefined' for ()", function() {
			expect(rgbToHexColor()).equal(undefined);
		});
	});	
});