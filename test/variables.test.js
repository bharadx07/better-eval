const betterEval = require("../src");

test("should be able to pass in string variables", () => {
  // string variable
  const name = "Tom";
  const greeting = betterEval("'Hello ' + name", { name });
  // expected
  const expected = "Hello Tom";
  // test
  expect(greeting).toBe(expected);
});

test("should be able to call user made functions", () => {
  // user made function
  const returnName = () => "Bob";
  const greeting = betterEval("'Hello ' + returnName()", { returnName });
  // expected
  const expected = "Hello Bob";
  // test
  expect(greeting).toBe(expected);
});
