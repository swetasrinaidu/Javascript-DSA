//given array, output sorted 
function insertionSort(arr){
    let currValue;
    if(arr.length===1) return arr;
    for(let i=1;i<arr.length;i++){
        currValue=arr[i];
        console.log("i",i)
        for(let j=i-1;j>=0;j--){
            console.log("comparing prevIndex and currentIndex",arr[j],currValue)
            if(arr[j]>currValue){
                arr[j+1]=arr[j];//moving one step right
                console.log("moving one step right",arr)
                arr[j]=currValue;//insertion
                console.log("after insertion ",arr)

            }
        }

    }
  return arr;
}
console.log(insertionSort([5,3,2,4,1]))//[1,2,3,4,5]
console.log(insertionSort([1,2,3,4,5]))//[1,2,3,4,5]