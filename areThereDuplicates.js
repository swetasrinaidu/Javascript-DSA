//given variable no. of arguments, check if there are any duplicates in them
function areThereDuplicates(...args){
    let first=0;
    let next=1;
    args.sort((a,b)=>a-b)
    while(next<args.length){
        if(args[first]===args[next]) return true;
        first++;
        next++; 
    } 
   return false;  
}
console.log(areThereDuplicates(1,23,45))//false
console.log(areThereDuplicates(25,23,23))//true
console.log(areThereDuplicates('a','t','s','s'))//true
console.log(areThereDuplicates('x','t','y','s'))//false
