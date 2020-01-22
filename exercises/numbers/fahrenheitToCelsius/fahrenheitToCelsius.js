/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {  
  return (temp - 32)*5/9;
  // This is your job. :).
}

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(198));
console.log(fahrenheitToCelsius(57));
console.log(fahrenheitToCelsius(0));
  // Your sanity checks go here.
}

module.exports = fahrenheitToCelsius;
