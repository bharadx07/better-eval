"use strict";

const vm = require("vm");
const insertedClearContext = require("./clearContext");
const parseInsertedVariables = require("./parseInsertedVariabels");

/**
 * @description takes code to execute and exexcutes it safely!
 * @param {string} code - Code to be executed.
 * @param {object} insertedVariables - Variables from your code to pass into the execution context. Passed in like: {variableName, variableValue}
 * @param {object} vmOptions - The options for how to run the VM to execute the code.
 * @returns {any} if your evaluated code returns a value, then betterEval will return it to you.
 */
function betterEval(code, insertedVariables = null, vmOptions = {}) {
  //start by generating a random variable name for our evaled value
  const resultName = "EVAL_RESULT_" + Math.floor(Math.random() * 1000000);

  //then assign it to our results object
  let results = {};
  results[resultName] = null;

  // if we want to add our own variables to the function, take care of parsing that
  if (insertedVariables) {
    results = parseInsertedVariables(insertedVariables, results);
  }

  //set the variable equal to the code
  const codeExec = `${insertedClearContext}; ${resultName} = ${code}`;

  //run the code on the vm
  vm.runInNewContext(codeExec, results, vmOptions);

  //return the executed value
  return results[resultName];
}

module.exports = betterEval;
