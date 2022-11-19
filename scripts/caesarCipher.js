/*
65-90 are the ranges for A-Z (uppercase letters)
97-122 are the ranges for a-z (lowercase letters)
26 is the number of letters in the alphabet
*/

function caesarCipher(str,k) {
    let n = 26; 
    if (k < 0) {
        return caesarCipher(str, k + n);
    }
    return str.split('')
        .map(function (c) {
            if (c.match(/[a-z]/i)) {
                let code = c.charCodeAt(); //converting to ASCII
                let shift = checkAlpha()       
                function checkAlpha(){
                    if (code >= 65 && code <= 90) {
                         return 65
                     } else if (code >= 97 && code <= 122) {
                         return 97 
                     } else {return 0} 
                 }  
                return String.fromCharCode(((code - shift + k) % n) + shift);
            }return c;
        }).join('');
}



module.exports = caesarCipher