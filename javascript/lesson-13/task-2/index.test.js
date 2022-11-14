import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('every index to squared', () => {
  const result = getSquaredArray([2, 3, 4]);
  expect(result).toEqual([4, 9, 16]);
});
it('only odd numbers', () => {
  const result = getOddNumbers([2, 3, 4, 5, 6, 7]);
  expect(result).toEqual([3, 5, 7]);
});
it('a plus b', () => {
  const result = getSum(2, 5);
  expect(result).toEqual(7);
});
