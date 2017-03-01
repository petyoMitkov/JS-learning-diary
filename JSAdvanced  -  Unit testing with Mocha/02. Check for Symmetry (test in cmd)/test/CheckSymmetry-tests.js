let isSymmetric = require("../CheckSymmetry").isSymmetric;
let expect = require("chai").expect;

describe("Test Check Array Symmetry:", function() {
    describe("Positive tests", function() {
        it ("1+.should return True for [1, 43, 100, 43, 1]", function() {
            expect(isSymmetric([1, 43, 100, 43, 1])).equal(true);
        });
        it ("2+.should return True for ['pesho', 'gosho', 'pesho']", function() {
            expect(isSymmetric(['pesho', 'gosho', 'pesho'])).equal(true);
        });
        it ("3+.should return True for ['abv', {a:123}, 0, new Date(), 0, {a:123}, 'abv']", 
            function() { 
                expect(isSymmetric(['abv', {a:123}, 0, new Date(), 0, {a:123}, 'abv'])).equal(true);
        });
        it ("4+.should return True for []", function() { 
            expect(isSymmetric([])).equal(true);
        });
    });
    describe("Negative tests", function() {
        it ("1-.should return False for [1, 43, 100]", function() {
            expect(isSymmetric([1, 43, 100])).equal(false);
        });    
        it ("2-.should return False for [1, 43, 100, 43, -1]", function() {
            expect(isSymmetric([1, 43, 100, 43, -1])).equal(false);
        });
        it ("3-.should return False for ['pesho', 'gosho']", function() {
            expect(isSymmetric(['pesho', 'gosho'])).equal(false);
        }); 
        it ("4-.should return False for ['abv', {a:123}, 0, new Date(), 0, {x:123}, 'abv']", 
            function() { 
                expect(isSymmetric(['abv', {a:123}, 0, new Date(), 0, {x:123}, 'abv'])).equal(false);
        });
        it ("5-.should return False for '5, 10, 5' ", function() { 
            expect(isSymmetric('5, 10, 5')).equal(false);
        });
        it ("6-.should return False for - without parameter ", function() { 
            expect(isSymmetric()).equal(false);
        });
    });   
});
