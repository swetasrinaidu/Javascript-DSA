//given an object,find all values which are numbers n convert them to string
function stringifyNumbers(obj){
    newObj={};
     for(let key in obj){
         if(typeof obj[key] === "number"){
             newObj[key]=obj[key].toString();
         }else if(typeof obj[key]==="object" && Array.isArray(obj[key])){
             newObj[key]=obj[key].join(",")
         }else{
             newObj[key]= stringifyNumbers(obj[key]);
         }

     }
     return newObj;

}
console.log(stringifyNumbers({y:{a:3,b:4},x:[2],z:6}))//{a:"3",b:"4",x:"2",z:"6"}
