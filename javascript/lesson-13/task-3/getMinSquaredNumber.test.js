import abs from './getMinSquaredNumber';

it('square nim number', () => {
  const emptyArr = abs([]);
  expect(emptyArr).toEqual(null);
  const string = abs('abs');
  expect(string).toEqual(null);
  const fullArr = abs([-4, 6, -5, 3]);
  expect(fullArr).toEqual(9);
});
