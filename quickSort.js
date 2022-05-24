// //given array,output sorted array
function swap(arr,index1,index2){
    [arr[index1],arr[index2]]=[arr[index2],arr[index1]]
}
function partition(arr,start,end){
    let pivot=arr[start];
    let storeIndex=start;
    for(let i=start+1;i<=end;i++){
        if(pivot>=arr[i]){
            storeIndex++;
            swap(arr,i,storeIndex)
        }
    
    }
    swap(arr,start,storeIndex)
    return storeIndex;  
  
}
function quickSort(arr,left=0,right=arr.length-1){
    if(arr.length===1) return arr;
    if(left<right){

        let pivotIndex=partition(arr,left,right)
        if(left<pivotIndex-1) quickSort(arr,left,pivotIndex-1)//left partition
        if(pivotIndex<right) quickSort(arr,pivotIndex+1,right)//right partition

    }    
    return arr;

}

console.log(quickSort([5,3,2,4,1]))//[1,2,3,4,5]
