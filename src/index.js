"use strict";

const vm = require("vm");

/**
 * @description takes code to execute and the context to exec it in, and exec's the code in the context!
 * @param {string} code
 * @param {'local' | 'vm'} execContext
 * @returns {any} if your evaluated code returns a value, then betterEval will return it to you.
 */
function betterEval(code, execContext) {
  if (execContext === "local") {
    /* option 1. we want to run the code on a local fn context */

    // literal text of function to flush the value out
    const flush = `return ${code}`;

    //construct function that runs the 'flush'
    const flushFn = new Function(flush);

    //run the function and return the value if exists
    return flushFn();
  } else if (execContext === "vm") {
    /* option 2/. we want to run on a node vm */

    //start by generating a random variable name for our evaled value
    const resultName = "EVAL_VALUE_" + Math.floor(Math.random() * 1000000);

    //then assign it to our results object
    const results = {};
    results[resultName] = null;

    //set the variable equal to the code
    const codeExec = `${resultName} = ${code}`;

    //run the code on the vm
    vm.runInNewContext(codeExec, results);

    //return the executed value
    return results[resultName];
  } else {
    /* otherwise: the context isn't right, throw an error */
    throw new Error(
      "Unsupported context for execution. Please choose between 'local' and 'vm'."
    );
  }
}

module.exports = betterEval;
