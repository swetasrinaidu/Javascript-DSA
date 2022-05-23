//given sorted array,do binary search and return index of given value
function binarySearch(arr,value){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let middle=Math.floor((left+right)/2);
        if(value<arr[middle]){
            right=middle-1;
        }else if(value>arr[middle]){
            left=middle+1;
        }else{
            return middle;
        }
    }
    return -1;
}
console.log(binarySearch([1,4,6,8,9,89,98],8))//3
console.log(binarySearch([1,4,6,8,9,89,98],89))//4
console.log(binarySearch([1,4,6,8,9,89,98],99))//-1
console.log(binarySearch([],99))//-1