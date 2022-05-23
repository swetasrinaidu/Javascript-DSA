//given an array of words, capitalize each word using recursion
function capitalizeWords(arr){
    if(arr.length===0) return;
    if(arr.length===1) return [arr[0].toUpperCase()];
    let res=[];
    let capital= capitalizeWords(arr.slice(0,-1))
    res=[...capital]
    res.push(arr.slice(arr.length-1)[0].toUpperCase());
    return res;
}
console.log(capitalizeWords(["sweta","is","smart"]))//["SWETA","IS","SMART"]
console.log(capitalizeWords([]))//["A","B","C","D","E"]