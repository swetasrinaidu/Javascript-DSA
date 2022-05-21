//accepts a num and adds up all nums from 0 to it
function recursiveRange(num){
    if(num===1) return 1;
     return num+recursiveRange(num-1);
}

console.log(recursiveRange(5))//15
console.log(recursiveRange(10))//55