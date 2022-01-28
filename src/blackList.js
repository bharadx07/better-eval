// blacklisted variables (no fn) to be passed in through vars param in betterEval
const blackListedVariablesNode = [eval, Function, global, process, module];

// functions that will be set to null in the betterEval default context for double safet
const blackListedVariableStrings = [
  "global",
  "process",
  "module",
  "require",
  "document",
  "window",
  "Window",
  "eval",
  "Function",
];

// create a context obj from above functions
const blackListedContext = {};
blackListedVariableStrings.forEach((bl) => (blackListedContext[bl] = null));

module.exports = {
  blackListedVariablesNode,
  blackListedContext,
};
