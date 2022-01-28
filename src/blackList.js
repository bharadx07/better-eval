const blackListedVariablesNode = [
  eval,
  Function,
  require,
  global,
  process,
  module,
];

const blackListedVariableStrings = [];

const blackListedContext = {};

module.exports = {
  blackListedContext,
};
