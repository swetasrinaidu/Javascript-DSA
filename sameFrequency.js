//given 2 numbers,check if they have same frequency
function sameFrequncy(num1,num2){
     if(num1.toString().length !== num2.toString().length) return false;
     let counter1={};
     let counter2={};
     for(let i of num1.toString()){
         counter1[i] = (counter1[i]||0)+1;
     }
     for(let i of num2.toString()){
         counter2[i] = (counter2[i]||0)+1;
     }
     for(let i in counter1){
         if(!(i in counter2 && counter1[i]===counter2[i])) 
            return false;   
     }
     console.log(counter1,counter2)

     return true;
}
console.log(sameFrequncy(1234,3214))
console.log(sameFrequncy(122234,32145))
console.log(sameFrequncy(33445,32145))
console.log(sameFrequncy(1000,0))