//accepts array of integers and a number n, return the max sum of n consecutive elements in array
function maxSubArraySum(arr,n){
   let maxSum=0;
   for(let i=0;i<n;i++){
       maxSum+=arr[i];
   }
   let tempSum=maxSum;
   for(let j=n;j<arr.length;j++){
       tempSum=tempSum+arr[j]-arr[j-n];
       maxSum=maxSum>tempSum?maxSum:tempSum;
   }
   return maxSum;
}   
console.log(maxSubArraySum([2,1,3,4,1,5,5,0,6,7,1],2))
console.log(maxSubArraySum([2,1,3,4,1,5,5,0,6,7,1],3))