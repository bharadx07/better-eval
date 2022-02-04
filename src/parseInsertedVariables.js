const { blackListedVariablesNode } = require("./blackList");

/**
 * @param {object} vars
 * @param {'local' | 'vm'} execContext
 * @description parses user variables into context and prevents mal variables and objects (lv 1).
 * @returns {object} sandbox context with user variables.
 */
function parseInsertedVariables(vars, sandbox) {
  // all keys of passed in variables
  Object.keys(vars).forEach(function (key) {
    if (blackListedVariablesNode.includes(vars[key])) return; // case 1: mal variable top level

    if (typeof vars[key] === "object") {
      // case 2: mal variable obj
      Object.keys(vars[key]).forEach((k) => {
        if (blackListedVariablesNode.includes(vars[key][k])) {
          vars[key][k] = null;
        }
      });
    }

    /** next: nested (recursion) */

    sandbox[key] = vars[key]; // add var to context if good
  });

  return sandbox;
}

module.exports = parseInsertedVariables;
