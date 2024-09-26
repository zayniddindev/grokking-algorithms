const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const wantedNumber = 3;

/**
 * @param {T[]} sortedArray
 * @param {T} wantedNumber
 * @returns {number|null}
 */
const binarySearch = (sortedArray, wantedNumber) => {
  let low = 0;
  let high = sortedArray.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = sortedArray[mid];
    if (guess == wantedNumber) {
      return mid;
    }
    if (guess > wantedNumber) {
      high = mid - 1;
      continue;
    }
    if (guess < wantedNumber) {
      low = mid + 1;
      continue;
    }
  }
  return null;
};

const index = binarySearch(sortedArray, wantedNumber);
console.log(index);
