const capital = require('../scripts/capitilize');

test ("capitilizes first letter of first word", () => {
    expect(capital("hello my name is bob")).toBe("Hello my name is bob")
})

test ("Already Capital", () => {
    expect(capital("Hello my name is bob")).toBe("Hello my name is bob")
})
