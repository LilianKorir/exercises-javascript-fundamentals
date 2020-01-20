/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
function remainderOf(num1, num2) {
  let quotient = num1/num2;
  let remainder = num1-quotient*num2;


  /*
    This is your job. :)

    If you're not sure, step out of the code and use pen + paper. Start
    with simple examples and pay attention to the process you carry out.
  */
 return remainder;
}

if (require.main === module) {
  console.log('Running sanity checks for remainderOf');
  console.log(10 % 1); // 0
  console.log(10 % 2); // 0
  console.log(10 % 3); // 1
  console.log(10 % 4); // 2
  console.log(20 % 5); // 0
  console.log(20 % 6); // 2
  console.log(30 % 7); // 2
  console.log(10 % 2.5); //0
  console.log( 4.5 % 1.5) //0

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = remainderOf;
