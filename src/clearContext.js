/**
 * @description prevents functions from the global scope from leaking into the betterEval scope
 */
function clearContext() {
  // nonunique variable cancel outs (cant be pre-checked)
  require = null;
  module = null;

  // all constructors on this
  const keys = Object.getOwnPropertyNames(this).concat(["constructor"]);

  // go through keys, killing bad functions
  keys.forEach((key) => {
    const item = this[key];
    // no null
    if (!item) return;
    // no fn
    if (typeof Object.getPrototypeOf(item).constructor === "function") {
      Object.getPrototypeOf(item).constructor = undefined;
    }
    // no constructor fn
    if (typeof item.constructor === "function") {
      this[key].constructor = undefined;
    }
  });
}

// convert to string so can run in vm
const insertedClearContext = `${clearContext.toString()}; clearContext()`;

module.exports = insertedClearContext;
