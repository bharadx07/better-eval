/**
 * @param {object} vars
 * @param {'local' | 'vm'} execContext
 */
function parseInsertedVariables(context, sandbox) {
  Object.keys(context).forEach(function (key) {
    if (context[key] === Function || context[key] === eval) return;
    sandbox[key] = context[key];
  });

  return sandbox;
}

module.exports = parseInsertedVariables;
