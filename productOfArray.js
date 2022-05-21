//given an array, calculate its product using recursion
function productOfArray(arr){
    if(arr.length===1) return arr[0];
      return arr[0]*productOfArray(arr.slice(1));

}

console.log(productOfArray([1,2,3,4,5]))//120
console.log(productOfArray([500,0]))//0
console.log(productOfArray([500,1000]))//500000