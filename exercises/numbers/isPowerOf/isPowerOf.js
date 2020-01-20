/**
 * Given two non-negative integers, `n` and `b`, return `true` of `n` is a power of `b`
 * and `false` otherwise.
 *
 * A number is a `n` power of `b` if it can be written as `b**k` for some positive integer `k`,
 * where "`**`" represents the exponentiation operator.
 *
 * For example, since `8` equals `2 * 2 * 2`, which is `2**3`, then `8` is a power of `2`.
 * Conversely, `9` is not a power of `2` since there's no integer `k` such that `9 === 2**k`.
 *
 * @example
 * 
 * isPowerOf(2, 2) // => true
 * isPowerOf(3, 3) // => true
 * isPowerOf(10, 2) // => false
 
 *
 * @param {number} num - The input number
 * @returns {boolean} True if input is a power of 2 and false otherwise.
 */
function isPowerOf(n, base) {
  let exponent = 0
  for (let exponent = 0; exponent++;)
return base ** exponent === n;
  

  // Your code here
  // Remember, you can assume that num is a positive integer.
}

if (require.main === module) {
  console.log('Running sanity checks for isPowerOf:');


  console.log(isPowerOf(9, 2)) // false
  console.log(isPowerOf(10, 3)) // => false
  console.log(isPowerOf(1, 1)) // => true
}

module.exports = isPowerOf;
