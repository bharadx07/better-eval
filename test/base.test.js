const betterEval = require("../src");

test('should evaluate a simple expression', () => {
    // sum
    const sum = betterEval("1+1");
    //expected
    const expected = 2;
    //test
    expect(sum).toBe(expected)
})

test('should join two strings', () => {
    // joined
    const joined = betterEval("'Hello ' + 'World'")
    // expected
    const expected = "Hello World"
    // test
    expect(joined).toBe(expected)
})

test('should be able to call object functions', () => {
    // uppercased
    const uppercased = betterEval("'lowercase'.toUpperCase()");
    // expected
    const expected = "LOWERCASE"
    // test
    expect(uppercased).toBe(expected)
})

test('should be able to get values from functions', () => {
    // insideFn
    const insideFn = betterEval("(() => 'hello')()")
    // expected
    const expected = "hello"
    // test
    expect(insideFn).toBe(expected)
})


test('should be able to access non destructive properties', () => {
    // non destructive
    const nonDestructive = betterEval("Array(5)");
    // expected
    const expected = Array(5)
    // test
    expect(nonDestructive).toEqual(expected)
})


