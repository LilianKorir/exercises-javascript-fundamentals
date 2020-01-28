/**
 * Given the the length of three triangle sides, returns the triangle's type as a string, i.e.,
 * `'acute'`, `'right'`, `'obtuse'`, or `'invalid'`.
 *
 * See https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf
 *
 * If a triangle can't be formed from the three side lengths then return `'invalid'`.
 *
 * @example
 * triangleType(3, 4, 5); // => 'right'
 * triangleType(4, 3, 5); // => 'right' (the order of arguments shouldn't matter)
 * triangleType(1, 1, 1); // => 'acute'
 * triangleType(12, 15, 8); // => 'obtuse'
 * triangleType(1, 1, 3); // => 'invalid'
 *
 * @param {number} monthNum - A number representing the month, with 1 for January
 *   and 12 for December.
 * @return {number} The number of days in the given month
 */
function triangleType(a,b,c) {
  if(a**2 + b**2 === c**2){
    return 'right'
  }
  if ((a**2 + b**2) < c**2){
    return 'obtuse'}
  if ((a**2 + b**2) > c**2){
      return 'acute'}
      
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for triangleType:');
  //c is the largest number
console.log(triangleType(3,4,5));
console.log(triangleType(64,144,225));
console.log(triangleType(12,8,15));
console.log(triangleType(4,3,5));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = triangleType;
