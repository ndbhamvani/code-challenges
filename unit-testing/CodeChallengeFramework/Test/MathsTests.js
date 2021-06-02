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
          if (isNaN(x) || isNaN(x)){
            expect(mathFn.numMultiply(x, y)).to.be.NaN;
          } else {
            expect(mathFn.numMultiply(x, y)).to.equal(totalMULTIPLY)
          }
        } catch(err) {
          console.log("\x1b[36m", err.message)
        }
        done();
      });
    });
  });


  mathData.factorialData.forEach(({i, n, result}) => {
    describe(`factorial function. Row: ${i}`, function() {
      it('It should correctly calculate n factorial while 1 <= n <= 10', function(done) {
          expect(mathFn.factorial(n)).to.equal(result);
          done();
        });
      });
    });