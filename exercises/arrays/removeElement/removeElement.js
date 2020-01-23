/**
 * Given an array and an element, return a new array with all instances of the
 * given element removed.
 *
 * @example
 * removeElement([1, 1, 1], 1); // => []
 * removeElement([1, 2, 1], 1); // => [2]
 * removeElement(['one', 'two', 'three'], 'two'); // => ['one', 'three']
 * removeElement(['Jesse', undefined, 'Farmer'], undefined); // => ['Jesse', 'Farmer']
 *
 * @param {object[]} array - An array
 * @param {object} element - An element to remove
 * @returns {object[]} A copy of the input array with all instances of the given
 *   element removed.
 */
function removeElement(array, element) {
  let newArray = [];
  for ( index = 0; index < array.length; index+=1){
    if (array[index] !== element){
      newArray.push(array[index]);
    }
  }
 return newArray;
  // This is your job. :)
}

if (require.main === module) {
  
  console.log('Running sanity checks for removeElement:');
  console.log(removeElement([1,2,3,4,5,6,7,8,8,9,0,0,1], 0)); //[1,2,3,4,5,6,7,8,8,9,1]
  console.log(removeElement(['lily','is', 'awesome','lovely'], 'awesome')); // ['lily', 'is', 'lovely']

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = removeElement;
