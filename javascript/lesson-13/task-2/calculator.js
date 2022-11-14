export function getSquaredArray(arr) {
  return arr.map((x) => x ** 2);
}
export function getOddNumbers(arr) {
  return arr.filter((x) => x % 2 === 1);
}
export default (a, b) => a + b;
