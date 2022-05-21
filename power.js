//power using recursion
function power(base,exp){
    if(base===0) return 0;
    if(exp===0) return 1;
      return base*power(base,exp-1);
}

console.log(power(3,2))//9
console.log(power(2,3))//8
console.log(power(0,3))//0
console.log(power(3,0))//1
