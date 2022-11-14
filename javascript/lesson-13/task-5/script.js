export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  const result = arr.slice(0);
  return result.reverse();
};
export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  return amount > balances[clientIndex] ? -1 : balances[clientIndex] - amount;
};
export const getAdults = (obj) => {
  const workObj = {};
  const entries = Object.entries(obj);
  // eslint-disable-next-line no-return-assign, prefer-destructuring
  entries.forEach((x) => (x[1] >= 18 ? (workObj[x[0]] = x[1]) : x));
  return workObj;
};
