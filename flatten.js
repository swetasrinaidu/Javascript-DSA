//recursive function to flatten array of arrays
function flatten(arr){
    let newArr=[]
  for(let i in arr){
    if(Array.isArray(arr[i])){
            console.log(i,arr[i])
            newArr=newArr.concat(flatten(arr[i]));
    }else{
            newArr.push(arr[i])
    }
 }
    return newArr;
}
 console.log(flatten([[[1]]]))
 console.log(flatten([[[[1]]],2,[3,4],[[5],6]]))
 console.log(flatten([2,[3,4],[[5],6]]))
