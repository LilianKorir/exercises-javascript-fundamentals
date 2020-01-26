function isPerfectSquare(num) {
    let n = 1;
   
    for ( let n = 1; n <= num; n++){
     if (num/n ===n){
      return true;
     }
      }
      return false;
   }

if (require.main === module) {
    console.log(isPerfectSquare(5)); // false
    console.log(isPerfectSquare(25)); // true
    console.log(isPerfectSquare(1)); // true
    console.log(isPerfectSquare(-9)); // false
    console.log(isPerfectSquare(100)); // true
}