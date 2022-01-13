const betterEval = require("../src");


console.log(betterEval("`Sum is ${eval('1+1')}`", {eval})) // eval is undefined!
