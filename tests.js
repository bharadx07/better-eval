const betterEval = require("./src/core");

console.log(
  betterEval("hack.hard.b", { hack: { hard: { eval, b: 1 } }, a: 1 })
);
