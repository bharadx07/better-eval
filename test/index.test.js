const betterEval = require("../src");

test('Evaluate a simple expression', () => {
    const result = betterEval("1+1")
    expect(result).toBe(2)
})
