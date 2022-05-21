//factorial using recursion
function factorial(num){
    if(num<0) return;
    if(num===0 || num===1) return 1;
      return num*factorial(num-1);
}

console.log(factorial(4))//24
console.log(factorial(0))//1
console.log(factorial(5))//120