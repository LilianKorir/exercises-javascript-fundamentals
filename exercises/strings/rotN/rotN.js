/**
 * Given an input string and positive integer N, returns a ROT-N
 * copy of the string.
 *
 * ROT-N is just like ROT-13 except that we specify the number
 * instead of only using 13.
 *
 * Play with https://rot13.com/, you can change the N.
 *
 * @example
 * rotN('Hello, world!', 13); // => 'Uryyb, jbeyq!'
 * rotN('Hello, world!', 9); // => 'Qnuux, fxaum!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function rotN(string) {
  let array = [];
  
  for ( i = 0; i <= string.length; i++){
    let n = 0; n <= 13;  n++
    if ( string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= (65+n)){
      array.push(String.fromCharCode(string.charCodeAt(i)+ n));
    }
    else if (string.charCodeAt(i) >= (65+n) && string.charCodeAt(i)<= 90){
      array.push(String.fromCharCode(string.charCodeAt(i) - n));
    }
    else { array.push(string[i]);
    
    }
  }
  return array.join('');
  
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for rotN:');
  console.log(rotN('NO WAY'));
  console.log(rotN('SUPER BOWL 3'));
  console.log(rotN('TECH ETHICS'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = rotN;
