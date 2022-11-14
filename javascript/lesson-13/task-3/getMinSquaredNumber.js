export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return arr.sort((a, b) => Math.abs(a) - Math.abs(b))[0] ** 2;
};
