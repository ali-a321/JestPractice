const reverse = require('../scripts/reverseString');

test ("reverse word", () => {
    expect(reverse("name")).toBe("eman")
})

test ("reverse 2 words with in b/w space", () => {
    expect(reverse("Hello das")).toBe("sad olleH")
})
