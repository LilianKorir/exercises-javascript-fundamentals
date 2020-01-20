/**
 * Given an array of integers, returns the count of odd integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Odd_number
 *
 * @example
 * countOdds([1, 2, 3, 4, 5, 19]); // => 4
 * countOdds([10, 10, 10]); // => 0
 * countOdds([1, 1, 1, 2]); // => 3
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
function countOdds(array) {
  let odds = 0;
  for ( let element of array) {
    if ( element % 2 !== 0){ 
      odds +=1;
    }
  }
  return odds
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for countOdds:');
  console.log(countOdds([3,98,19,76,0,9])); //3
  console.log(countOdds([7,-7,8,-3,17])); //4
}

module.exports = countOdds;
