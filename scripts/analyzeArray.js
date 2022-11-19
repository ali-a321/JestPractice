
function analyzeArray(arr){ 
    if (checkArray(arr) === false)
    {return "Only numbers"}
    const lowest = Math.min(...arr) 
    const highest = Math.max(...arr)
    const count = arr.length 
    const sum =  arr.reduce((current, previous) => {
        return current + previous;
      });
    const avg = sum/count
    
    const object = {
        lowest: lowest,
        highest: highest,
        count: count,
        avg: avg,
    }
    return object
}

function checkArray(arr){
    return arr.every(element => {
        return typeof element === 'number'
    });
}

module.exports = analyzeArray