/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
  let runningTotal = 0;
  for ( let num of array){
    runningTotal += num;
  }
  return runningTotal;
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');

  console.log(sum([2,3,4,5])); // 14
  console.log(sum([10,20,90,-100])); // 20

    // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
