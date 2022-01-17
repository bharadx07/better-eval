const betterEval = require("../src/");

test("should not be able to pass eval", () => {
  // no pass eval
  const failEval = betterEval("eval", { eval });
  // expected
  const expected = null;
  // test
  expect(failEval).toBe(expected);
});

test("should not be able to pass function constructor", () => {
  // no pass eval
  const failEval = betterEval("Function", { Function });
  // expected
  const expected = null;
  // test
  expect(failEval).toBe(expected);
});
