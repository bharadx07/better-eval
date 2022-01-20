const fs = require("fs");
const path = require("path")

const package = fs.readFileSync(path.resolve(__dirname, "../package.json"));

console.log(package)