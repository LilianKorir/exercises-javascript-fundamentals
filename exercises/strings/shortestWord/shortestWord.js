/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  let Array = string.split(' ')
  counter = 10000000
  for ( let i of Array) { 
if( i.length < counter){
  counter = i.length

  return i;
}
  }
  
      
    }
  

 
  
  
  
    
  
  // This is your job. :)

 if (require.main === module) {
console.log('Running sanity checks for shortestWord:');

console.log(shortestWord('Nakuru is the best city')); // is
console.log(shortestWord('What school do you attend?')); //do
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

 }
module.exports = shortestWord;
