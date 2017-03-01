var expect = chai.expect;

describe("Test sum(arr)", function() {
    it ("should return 3 for [1, 2]", function() {
        let expectedSum = 3;
        let actualSum = sum([1,2]);
        expect(actualSum).to.be.equal(expectedSum);
        //expact(sum([1,2]).equal(3)); //shorter way
    });
    it ("should return 1 for [1]", function() {
    	expect(sum([1])).equal(1);
    });
    it("should return 0 for []", function() {
    	expect(sum([])).equal(0);
    });
    it ("should return 3 for [1.5, 2.5, -1]", function() {
    	expect(sum([1.5, 2.5, -1])).equal(3);
    });
    it ("should return NaN for ['some string']", function() {
    	expect(sum(['some string'])).to.be.NaN;
    });
});
