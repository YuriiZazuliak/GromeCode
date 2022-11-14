import { calc } from './calculator';

it('calc testing', () => {
  const notString = calc(['1', '+', '2']);
  expect(notString).toEqual(null);
  const plus = calc('2 + 2');
  expect(plus).toEqual('2 + 2 = 4');
  const minus = calc('4 - 3');
  expect(minus).toEqual('4 - 3 = 1');
  const multiply = calc('2 * 3');
  expect(multiply).toEqual('2 * 3 = 6');
  const divide = calc('10 / 5');
  expect(divide).toEqual('10 / 5 = 2');
});
