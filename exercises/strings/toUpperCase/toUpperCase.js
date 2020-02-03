/**
 * Given an input string, returns a copy of the string with all-uppercase letters.
 *
 * Don't use JavaScript's built-in string.toUpperCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding uppercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toUpperCase('HelLo fRiends!'); // => 'HELLO FRIENDS!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A uppercase copy of the input string
 */

function toUpperCase(string) {
  let newstring = [];
  for ( i = 0; i <= string.length; i++){
    if ( string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
     newstring.push(String.fromCharCode(string.charCodeAt(i)- 32));
     
    }
else{
  newstring.push(string[i]);
  
}
}
return newstring.join('');
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for toUpperCase:');
  console.log(toUpperCase('whats up? '));
  console.log(toUpperCase('this is a new decade!'))

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = toUpperCase;
