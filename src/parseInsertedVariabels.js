const blackListedVariables = [
  eval,
  Function,
  require,
];

/**
 * @param {object} vars
 * @param {'local' | 'vm'} execContext
 */
function parseInsertedVariables(vars, sandbox) {
  Object.keys(vars).forEach(function (key) {
    if (blackListedVariables.includes(vars[key])) return;
    sandbox[key] = vars[key];
  });

  return sandbox;
}

module.exports = parseInsertedVariables;
