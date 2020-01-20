/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  let count=0;
  for (let i of string) {
    if (i===letter){
      count +=1}
  }
   
return count;
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');

  console.log(countLetter('aaaa', 'a') === 3) // false
  console.log(countLetter('AaAa', 'a') === 2) // true
  console.log(countLetter('Barbiee', 'e') === 2) // true
  // How else will you be sure your code does what you think it does?
}

module.exports = countLetter;
