//given array, output sorted array
function merge(arr1,arr2){
    console.log("sorting and merging")
    let i=0;
    let j=0;
    let res=[];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
           console.log("arr2[j],right,res",j,arr2[j],res)
           res.push(arr2[j])
           j++;
        }else{
            console.log("arr1[i],left,res",i,arr1[i],res)
            res.push(arr1[i])
            i++;
        }

    }
    while(i<arr1.length){
        console.log("arr1[i],left,res",i,arr1[i],res)
        res.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        console.log("arr2[j],right,res",j,arr2[j],res)
        res.push(arr2[j]);
        j++;
    }
    console.log("res",res)
    return res;

}
function mergeSort(arr){
    if(arr.length===1) return arr;
    console.log("spliting")
    let middle=Math.floor(arr.length/2);
    console.log("middle",middle)
    let left=mergeSort(arr.slice(0,middle));
    console.log("left",left)
    let right=mergeSort(arr.slice(middle));
    console.log("right",right)
    return merge(left,right);

}
console.log(mergeSort([5,3,2,4,1]))//[1,2,3,4,5]
 console.log(mergeSort([1,2,3,4,5]))//[1,2,3,4,5]