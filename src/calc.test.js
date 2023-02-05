const {sum, sub, mult, div} = require('./calc');

test ("1 + 2 = 3", () => {
  expect(sum(1,2)).toBe(3);
})

test ("2 - 1 = 1", () => {
  expect(sub(2,1)).toBe(1);
})

test ("3 * 3 = 9", () => {
  expect(mult(3,3)).toBe(9);
})

test ("9 / 3 = 3", () => {
  expect(div(9,3)).toBe(3);
})