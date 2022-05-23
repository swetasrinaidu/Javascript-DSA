//check if string passed is palindrome
function isPalindrome(str){
    if(str.length===2) return str[0]===str[1];
    if(str.length===1) return true;
    if(str[0]===str[str.length-1]) return isPalindrome(str.slice(1,-1))
    return false;    
}

console.log(isPalindrome("abba"))//true
console.log(isPalindrome("abbca"))//false
console.log(isPalindrome("abcba"))//true
