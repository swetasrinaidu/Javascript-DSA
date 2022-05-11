//secure == rescue

function Anagrams(str1,str2){
    if(str1.length!==str2.length) return false;
    let lookup={};
    for(let i of str1){
        lookup[i]=(lookup[i]||0) +1;
    }

    for(let i of str2){
        if(i in lookup) lookup[i]-=1;
    }
    for(let i of str1){
        if(lookup[i]!==0) return false;
    }

    return true;
    
}
console.log(Anagrams("abbc","cbab"))