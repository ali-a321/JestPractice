
function reverseString(string){
    let splitting = string.split("");
    let flip = splitting.reverse();
    let final = flip.join("")
    return final 
}

module.exports = reverseString;