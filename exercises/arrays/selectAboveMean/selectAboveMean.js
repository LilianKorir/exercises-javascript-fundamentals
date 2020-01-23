/**
 * Given an array of numbers, returns a new array consisting of every
 * number in the input array strictly greater than the mean.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectAboveMean([1, 1, 1]); // => []
 * selectAboveMean([-10, -10, 0, 10]); // => [0, 10]
 * selectAboveMean([1, 2, 3, 4, 5]); // => [4, 5]
 * selectAboveMean([100, 0, 100, 200, 100, 0]); // => [100, 100, 200, 100]
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all numbers in the input array
 *   greater than the mean.
 */
function selectAboveMean(array) {
  let total = 0;
  for (element of array){
    total += element;
    mean = total/array.length}
    let newArray = [];
    for (element of array){
      if (element > mean){
        newArray.push(element);
      }
    }
    return newArray;
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for selectAboveMean:');
  console.log(selectAboveMean([1, 1, 1])); // => [])
  console.log(selectAboveMean([1, 2, 3, 4, 5])); // => [4, 5])
  console.log(selectAboveMean([ 10,20,30,40,50,60,70,80,90,100])); //[ 60, 70, 80, 90, 100 ]

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = selectAboveMean;
