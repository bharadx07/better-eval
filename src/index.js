"use strict";

/**
 * @description takes code to execute and the context to exec it in, and exec's the code in the context!
 * @param {string} code
 * @param {'local' | 'vm'} context
 * @returns {any} if your evaluated code returns a value, then betterEval will return it to you.
 */
function betterEval(code, context) {
  if (context === "local") {
    /* option 1. we want to run the code on a local fn context */

    // literal text of function to flush the value out
    const flush = `return ${code}`

    //construct function that runs the 'flush'
    const flushFn = new Function(flush)

    //run the function and return the value if exists
    return flushFn()
    
  } else if (context === "vm") {
    /* option 2/. we want to run the code on a local fn context */
  } else {
    /* otherwise: the context isn't right, throw an error */
    throw new Error(
      "Unsupported context for execution. Please choose between 'local' and 'vm'."
    );
  }

  return 1;
}

module.exports = betterEval;
