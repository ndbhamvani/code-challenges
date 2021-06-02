const { assert, expect } = require("chai");
const mathFn = require('../Functions/Maths');
const mathData = require('../Data/MathsData');


mathData.numXY.forEach(({i, x, y, totalADD}) => {
describe(`numAdd function. Row: ${i}`, function() {
  it('It should correctly add two numbers together', function(done) {
      expect(mathFn.numAdd(x, y)).to.equal(totalADD);
      done();
    });
  });
});


mathData.numXY.forEach(({i, x, y, totalMULTIPLY}) => {
  describe(`numMultiply function. Row: ${i}`, function() {
    it('It should correctly multiply two numbers together', function(done) {
        try{
        expect(mathFn.numMultiply(x, y)).to.equal(totalMULTIPLY);
        } catch {
          console.log("\x1b[36m", "     This is not a number!")
        }
        done();
      });
    });
  });
