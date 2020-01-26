/**
 * Given a positive integer, return an array consisting of all its prime
 * factors sorted from smallest to largest. Each prime appears in the
 * returned array as many times as it divides the given integer.
 *
 * @example
 * primeFactors(2); // => [2]
 * primeFactors(2 * 2); // => [2, 2]
 * primeFactors(2 * 2 * 3); // => [2, 2, 3]
 * primeFactors(2 * 2 * 3 * 17 * 197); // => [2, 2, 3, 17, 197]
 * primeFactors(917329); // => [7, 7, 97, 193]
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of all the prime factors of the given integer
 */
function isPrime(num) {
  if ( num === 1){
     return false;}
 
     if ( num === 2){return true;}
     
   for ( let n = 2; n < num; n++){
   if (num % n === 0){
    return false;
   }
   return true;
 }
}
console.log(isPrime(3));

function primeFactors(num) {
  let array = [];
  let i = 2; // i-quotient
  for (i=2; i<= num; i++){
if (num % i === 0){
  if (isPrime(i) === true)
    array.push(i);
    }
}
  return array;
  /*
    Your code goes here.

    Work out one version that works and don't worry about performance.

    If you're having trouble working it out in code, step out of JS-land
    and use pen/paper, index cards, etc. — anything that helps you think
    about it without getting stuck in JavaScript syntax.
  */
}

if (require.main === module) {
  console.log('Running sanity checks for primeFactors:');
  console.log(primeFactors(2)); // => [2]
  console.log(primeFactors(2)); // => [2]
  console.log(primeFactors(2 * 2)); // => [2, 2]
  console.log(primeFactors(2 * 2 * 3)); // => [2, 2, 3]
  console.log(primeFactors(2 * 2 * 3 * 17 * 197)); // => [2, 2, 3, 17, 197]
  console.log(primeFactors(917329)); // => [7, 7, 97, 193]
  
  //
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = primeFactors;
