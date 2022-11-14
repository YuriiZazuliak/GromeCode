import { reverseArray, withdraw, getAdults } from './script';

it('reverse array', () => {
  const noArr = reverseArray('array');
  expect(noArr).toEqual(null);
  const defaultArr = [0, 1, 2, 3];
  const reverseArr = reverseArray(defaultArr);
  expect(reverseArr).toEqual([3, 2, 1, 0]);
  expect(defaultArr).toEqual([0, 1, 2, 3]);
});

it('delete money from wallet', () => {
  const clients = ['Bob', 'Ann', 'John', 'Endy'];
  const balances = [34, 56, 89, -4];
  const noEnouphMoney = withdraw(clients, balances, 'Ann', 145);
  expect(noEnouphMoney).toEqual(-1);
  const res = withdraw(clients, balances, 'John', 9);
  expect(res).toEqual(80);
  expect(balances).toEqual([34, 56, 89, -4]);
});
it('Adult filter obj', () => {
  const users = { 'John Doe': 19, Tom: 17, Bob: 18 };
  const filteredObj = getAdults(users);
  expect(filteredObj).toEqual({ 'John Doe': 19, Bob: 18 });
  const emptyObj = getAdults({});
  expect(emptyObj).toEqual({});
  expect(users).toEqual({ 'John Doe': 19, Tom: 17, Bob: 18 });
});
