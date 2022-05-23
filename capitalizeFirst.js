//given array of words, capitalize the first letter
function capitalizeFirst(arr){
    if(arr.length===0) return;
    if(arr.length===1) return [arr[0][0].toUpperCase()+arr[0].slice(1)];
    let capital=capitalizeFirst(arr.slice(0,-1))
    let res=[];
    res=[...capital];
    console.log(res,capital)
    res.push(arr.slice(arr.length-1)[0][0].toUpperCase()+arr.slice(arr.length-1)[0].slice(1))
    return res;
}
console.log(capitalizeFirst(["sweta","feeling","awesome"]))
console.log(capitalizeFirst([]))