/**
 * Given an input string, returns a copy of the string with all-lowercase letters.
 *
 * Don't use JavaScript's built-in string.toLowerCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding lowercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toLowerCase('HelLo fRiends!'); // => 'hello friends!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toLowerCase(string) {
  let newstring = [];
  for ( i = 0; i <= string.length; i++){
    if ( string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
     newstring.push(String.fromCharCode(string.charCodeAt(i)+ 32));
     
    }
else{
  newstring.push(string[i]);
  
}
}
return newstring.join('');
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for toLowerCase:');
  console.log(toLowerCase('Running sanity checks for toLowerCase:'));
  console.log(toLowerCase('I LOVE ADJACENT'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = toLowerCase;
