var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
it('the output of 5! is equal to 120',()=>{

//steup
const expected = 120
const input= 5
//exercise

const actual = Calculate.factorial(input)
//verify
assert.equal(actual,expected)
})

 it('result is 6 if the input is 3',() =>{
  const expected = 6;
  const input = 3;
  const actual = Calculate.factorial(input);
  assert.equal(actual,expected);
    });

it("returns 1 when you pass in 0.",()=>{

//steup
const expected = 1
const input = 0
//exercise
const actual = Calculate.factorial(input)
//verify
assert.equal(actual,expected)

})
  });
}); 