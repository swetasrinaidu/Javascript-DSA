// linear search: return the index of value in array
function linearSearch(arr,value){
    for(let i in arr){
        if(arr[i]===value) return i;
    }
    return -1;
}
console.log(linearSearch([34,45,78,96,35,89],78))//2
console.log(linearSearch([34,45,78,96,35,89],99))//-1
console.log(linearSearch([],99))//-1
