//given sorted array and value, search the array and return index
function search(arr,value){
    if(arr.length==0) return -1;
    let first=0;
    let last=arr.length-1;
    while(first<last){
        let midIdx = Math.floor((last-first)/2);

        if(value>arr[midIdx]){
            first=midIdx+1; 
            first++;

        }else if(value<arr[midIdx]){
            last=midIdx-1;
            last--;
        }else{
            return midIdx;
        }
    }    
    return -1;
}

console.log(search([1,2,3,4,5,6],2))
console.log(search([1,2,3,4,5,6],7))
console.log(search([9,2,7,7,7],7))

