/**
 * Given an array of numbers, return their product.
 *
 * @example
 * product([2, 4, 6]); // => 48 (i.e., 2 * 4 * 6)
 * product([-10, 10]); // => -100 (i.e., -10 * 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The product of the numbers in the array
 */
function product(array) {
  let runningproduct = array[0];
  for ( let num of array){
    runningproduct *= num;
  }
return runningproduct;
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for product:');
console.log(product([1,3,5])); //15
console.log(product([1,1])); 
console.log(product([2,12]));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = product;
