const analyzeArray = require('../scripts/analyzeArray');


test ("normal array", () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({
        lowest: 1,
        highest: 5,
        count: 5,
        avg: 3,
    })
})

test('array with non-number', () => {
    expect(analyzeArray([1, 2, 3, 4, '5'])).toBe('Only numbers');
  });
  