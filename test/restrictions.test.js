/**
 * All of these blacklisted variables should not be evaluated:
  - global
  - process
  - module
  - require
  - document
  - window
  - Window
  - eval
  - Function
 */

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
  // no pass function
  const failFunction = betterEval("Function", { Function });
  // expected
  const expected = null;
  // test
  expect(failFunction).toBe(expected);
});

test("should not be able to pass require", () => {
  // no pass require
  const failRequire = betterEval("require", { require });
  // expected
  const expected = null;
  // test
  expect(failRequire).toBe(expected);
});

test("should not be able to pass global", () => {
  // no pass global
  const failGlobal = betterEval("global", { global });
  // expected
  const expected = null;
  // test
  expect(failGlobal).toBe(expected);
});

test("should not be able to pass process", () => {
  // no pass process
  const failProcess = betterEval("process", { process });
  // expected
  const expected = null;
  // test
  expect(failProcess).toBe(expected);
});

test("should not be able to pass module", () => {
  // no pass module
  const failModule = betterEval("module", { module });
  // expected
  const expected = null;
  // test
  expect(failModule).toBe(expected);
});
