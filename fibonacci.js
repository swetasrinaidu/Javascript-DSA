//recursive function of fibonacci seq,return nth no in fibonacci seq
function fibonacci(num){
    if(num===1 || num===2) return 1;
       return fibonacci(num-1)+fibonacci(num-2);
}

console.log(fibonacci(3));//2
console.log(fibonacci(6));//8

