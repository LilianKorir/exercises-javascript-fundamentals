/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  let Array = string.split(' ')
  counter = 0
  for ( let i of Array) { //i=element
if(i.length > counter){
  counter=i.length
  return i
}
  }
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('Running sanity checks for Word:'));
  console.log(longestWord( 'what do you like'));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;
