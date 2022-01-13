/**
 * @param {object} vars
 * @param {'local' | 'vm'} execContext
 */
function parseInsertedVariables(vars, sandbox) {
  Object.keys(vars).forEach(function (key) {
    if (vars[key] === Function || vars[key] === eval) return;
    sandbox[key] = vars[key];
  });

  return sandbox;
}

module.exports = parseInsertedVariables;
