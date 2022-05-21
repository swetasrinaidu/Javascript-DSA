//reverse a string using recursion
function reverse(str){
    if(str.length==1) return str;
       return str.slice(-1)+reverse(str.slice(0,-1))
}

console.log(reverse("sweta"))//atews