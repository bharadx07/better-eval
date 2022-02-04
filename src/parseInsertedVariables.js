const { blackListedVariablesNode } = require("./blackList");

/**
 * @param {object} vars
 * @param {'local' | 'vm'} execContext
 */
function parseInsertedVariables(vars, sandbox) {
  Object.keys(vars).forEach(function (key) {
    if (blackListedVariablesNode.includes(vars[key])) return;
    if (typeof vars[key] === "object") {
      Object.keys(vars[key]).forEach((k) => {
        if (blackListedVariablesNode.includes(vars[key][k])) {
          vars[key][k] = null;
        }
      });
    }
    sandbox[key] = vars[key];
  });

  return sandbox;
}

module.exports = parseInsertedVariables;
