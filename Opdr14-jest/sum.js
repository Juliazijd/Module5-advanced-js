//function sum(a, b) {
//  return a + b;
//}
//module.exports = sum;


//in sum.test.js file: 

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});