function countLessThan(array, threshold) {

    let count = 0
   
    for(element of array){
      if(element < threshold){ 
        count +=1;
      }
    }
    return count;

  }
  
  if (require.main === module) {
    console.log('Running sanity checks for countGreaterThan:');
  console.log(countLessThan([1,2,3,4], 1)); // 0
  console.log(countLessThan([30,80,90,99,120,890,657], 300));// 5
  console.log(countLessThan([-90,-87,-678,86,47], -8));// 3
}