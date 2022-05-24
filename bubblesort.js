//input array, output sorted array
function swap(arr,index1,index2){
    [arr[index1],arr[index2]] = [arr[index2],arr[index1]];
}

function bubbleSort(arr){
    if(arr.length===1) return arr;
    let noSwap;
    for(let i=arr.length-1;i>=0;i--){
        noSwap=false;
        console.log("i",i)
        for(let j=0;j<i;j++){
            console.log("j",j)
           if(arr[j]>arr[j+1]){
               swap(arr,j,j+1)
               console.log("swap",arr)
               noSwap=true;

           }
        }
        console.log("noSwap",noSwap);
        if(!(noSwap)) break;//makes optimization linear for sorted array
    }
    return arr;

}
// console.log(swap([5,3,2,4,1],0,1))
console.log(bubbleSort([5,3,2,4,1]))//[1,2,3,4,5]
console.log(bubbleSort([1,2,3,4,5]))//[1,2,3,4,5]