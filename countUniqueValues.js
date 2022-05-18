 //accepts a sorted array and counts number of unqiue values in array
 function countUniqueValues(arr){
      if(arr.length ==0 ) return 0
      if(arr.length == 1) return 1
      let first=0;
      let counter=1;
      for(let second=1;second<arr.length;second++){
          if(arr[first]!==arr[second]){
               counter++;
      }
      first++;
  }
   return counter;
 }

 console.log(countUniqueValues([1,1,1,1,1,2,2,2,2]))
 console.log(countUniqueValues([-2,-2,-1,1,2,2,3,4,4]))
 console.log(countUniqueValues([-2]))