

const isNumber = (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
      } else {
        return true;
      }
    };
    

const add =(a,b) => {
    if (isNumber(a,b) === true){
        return  (a+b)}
   else {
    return "Please only input numbers"
   }
} 
const subtract =(a,b) => {
    if (isNumber(a,b)=== true){
        return  (a-b)}
        else {
            return "Please only input numbers"
           }
} 
const multiply =(a,b) => {
    if (isNumber(a,b) === true){
        return  (a*b)}
        else {
            return "Please only input numbers"
           }
} 

const divide =(a,b) => {
    if (isNumber(a,b)=== true){
        return  (a/b)}
        else {
            return "Please only input numbers"
           }
} 

const calculator  = {
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide,
}
module.exports = calculator