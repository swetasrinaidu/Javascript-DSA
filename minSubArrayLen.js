//given array and value,find length of smallest subarray with sum greater than 
//given value
function minSubArrayLen(arr,value){
      let maxSum=0;
      let count=0;
      let j=0;
      for(let i=0;i<arr.length;i++){
        if(arr[i]>value) return 1;
        maxSum+=arr[i];
        if(maxSum>value){
             j=i+1;
             break;
      }  
    }
    if(maxSum<=value) return "not possible";
    while(maxSum>value){
        maxSum = maxSum-arr[count];
        if(maxSum<=value) return j;
        j--;
        count++;
      }
}    
console.log(minSubArrayLen([1,4,45,6,0,19],51))//3
console.log(minSubArrayLen([1,10,5,2,7],9))//1
console.log(minSubArrayLen([1,11,100,1,0,200,3,2,1,250],280))//4
console.log(minSubArrayLen([1,2,4],8))//not possible


