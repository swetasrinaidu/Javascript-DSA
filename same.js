//check 2 arrays and return true if every value is corresponding value 
//squared in other

//bruteforce 
// function Same(arr1,arr2){
    // if(arr1.length !== arr2.length) return false;
    // for(let i=0;i<arr1.length;i++){
    //         if(arr2.indexOf(arr1[i]**2) == -1) return false;
    //               arr2.splice(arr2.indexOf(arr1[i]),1)
    //     return true;
    // }

//Refactored
function Same(arr1,arr2){
     if(arr1.length !== arr2.length) return false;
     let counter1={};
     let counter2={};
     for(let value of arr1){
         counter1[value]=counter1[value]||0 + 1;
     }
     for(let value of arr2){
         counter2[value]=counter2[value]||0+1;
     }
     for(let key in counter1){
         if(!(key**2 in counter2)) return false;
         if(counter1[key]!==counter2[key**2]) return false;
     }
     return true;
}

//test cases
console.log(Same([1,2,3,4,5],[25,9,16,1,4]));
console.log(Same([1,0,3,4,5],[25,9,16,1,4]));
console.log(Same([1,2,3],[9,16,1,4]));
console.log(Same([1,2,3],[9,4,1,1]));
console.log(Same([1,2,1],[4,4,1]));