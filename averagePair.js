//given sorted array and average, determine if there is a pair of values where avg pair equals 
// given average
function averagePair(arr,avg){
      let first = 0;
      let last = arr.length-1;

      while(first<last){
         if((arr[first]+arr[last])/2 === avg) return true;
         if((arr[first]+arr[last])/2 > avg){
             last--;
         }
         if((arr[first]+arr[last])/2 < avg){
             first++;
         }         
      }
    return false;
}
console.log(averagePair([1,2,4,6],5))//true
console.log(averagePair([1,2,5,6],5))//false
console.log(averagePair([],4))//false
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))//true
