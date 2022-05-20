//given 2 strings,find if string1 is subsequence of string2.
//A subsequence is a sequence that can be derived from another sequence by deleting some elements
//without changing order;
function isSubsequence(str1,str2){
    if(str1.length>str2.length) return false;
    let first=0;
    for(let i=0;i<str2.length;i++){
        if(str2[i]===str1[first]){
            first++;
        }
    }
    if(first==str1.length) return true;
    return false;
}
console.log(isSubsequence("AXY","ADXCPY"))//true
console.log(isSubsequence("AXY","YADXCP"))//false
console.log(isSubsequence("gksrek","geeksforgeeks"))//true

