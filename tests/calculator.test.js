const calculator = require('../scripts/calculator');

test ("adds", () => {
    expect(calculator.add(1,1)).toBe(2)
})
test ("neg adds", () => {
    expect(calculator.add(-2,1)).toBe(-1)
})

test ("subtracts", () => {
    expect(calculator.subtract(10,5)).toBe(5)
})
test ("neg subtracts", () => {
    expect(calculator.subtract(5,10)).toBe(-5)
})
test ("mult", () => {
    expect(calculator.multiply(10,5)).toBe(50)
})
test ("neg mult", () => {
    expect(calculator.multiply(-10,5)).toBe(-50)
})
test ("div", () => {
    expect(calculator.divide(10,5)).toBe(2)
})
test ("div", () => {
    expect(calculator.divide(5,10)).toBeCloseTo(0.5)
})
