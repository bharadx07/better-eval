/**
 * @description prevents functions from the global scope from leaking into the betterEval scope
 */
function clearContext() {
  // eslint-disable-next-line no-global-assign
  Function = null;
  require = null

  const keys = Object.getOwnPropertyNames(this).concat(["constructor"]);
  keys.forEach((key) => {
    const item = this[key];
    if (!item) return;
    if (typeof Object.getPrototypeOf(item).constructor === "function") {
      Object.getPrototypeOf(item).constructor = undefined;
    }
    if (typeof item.constructor === "function") {
      this[key].constructor = undefined;
    }
  });
}

const strictModeEvadeEval = "eval = null;"

const insertedClearContext = `${clearContext.toString()}; ${strictModeEvadeEval} clearContext()`;

module.exports = insertedClearContext;
