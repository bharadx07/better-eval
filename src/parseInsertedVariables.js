const { blackListedVariablesNode } = require("./blackList");

/**
 * @param {object} deepObject
 * @returns {boolean} does this deeply nested object contain any blacklisted variables
 */
function blackListDeepObjects(deepObject) {
  Object.keys(deepObject).forEach((key) => {
    if (blackListedVariablesNode.includes(deepObject[key])) {
      deepObject[key] = null;
    } else if (
      typeof deepObject[key] === "object" &&
      deepObject[key] !== null
    ) {
      deepObject[key] = blackListDeepObjects(deepObject[key]);
    }
  });

  return deepObject;
}

/**
 * @param {object} vars
 * @param {'local' | 'vm'} execContext
 */
function parseInsertedVariables(vars, sandbox) {
  Object.keys(vars).forEach(function (key) {
    if (blackListedVariablesNode.includes(vars[key])) return;

    if (Object.values(vars[key]).length > 0) {
      sandbox[key] = blackListDeepObjects(vars[key]);
      return;
    }

    sandbox[key] = vars[key];
  });

  return sandbox;
}

module.exports = parseInsertedVariables;
