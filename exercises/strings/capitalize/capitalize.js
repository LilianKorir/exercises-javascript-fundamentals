/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  firstLetter = string[0].toUpperCase()
  otherLetters = string.slice(1)
  return firstLetter + otherLetters
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');
  console.log(capitalize('tureen')); //Turren
  console.log(capitalize( 'tuesday')); // Tuesday

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;
