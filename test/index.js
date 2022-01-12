const betterEval = require("../src");

const code = "process.env";

betterEval(code, { process });

console.log(betterEval(code, { process }));
