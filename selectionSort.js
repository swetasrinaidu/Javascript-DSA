//given array,output sorted array
function swap(arr,index1,index2){
    [arr[index1],arr[index2]] = [arr[index2],arr[index1]];
}

function selectionSort(arr){
    let lowest=0;
    let temp;
    if(arr.length===1) return arr;
    for(let i=0;i<arr.length;i++){
        console.log("i",i)
        lowest=i;
        console.log("lowest",lowest)
        for(let j=i+1;j<arr.length;j++){
            console.log("j",j)
            if(arr[lowest]>arr[j]){
                lowest=j;
                console.log("new lowest",lowest)
            }
        }
        //swap after finding the first lowest w.r.t order of elements
        swap(arr,i,lowest)
        console.log("swap after inner loop",arr,arr[lowest],arr[i])

    }
    return arr;
}
console.log(selectionSort([5,3,2,4,1]))//[1,2,3,4,5]
console.log(selectionSort([1,2,3,4,5]))//[1,2,3,4,5]