const cipher = require('../scripts/caesarCipher');

test ("shifts letters one down in alphabet", () => {
    expect(cipher("abcd",1)).toBe("bcde")
})
test ("shifts letters in word with capital", () => {
    expect(cipher("Hello",1)).toBe("Ifmmp")
})