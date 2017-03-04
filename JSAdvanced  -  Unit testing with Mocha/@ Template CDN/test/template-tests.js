var expect = chai.expect;

describe("Test Template:", function() {
	describe("Positive tests", function() {
		//edit - it 
		it ("01 Should return '#FFFFFF' for (255, 255, 255)", function() {
			expect(rgbToHexColor(255, 255, 255)).equal("#FFFFFF");
		});
	});	
	describe("Negative tests", function() {
		//edit - it 
		it ("01 Should return '#FFFFFF' for (255, 255, 255)", function() {
			expect(rgbToHexColor(255, 255, 255)).equal("#FFFFFF");
		});
	});	
});