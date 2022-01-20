const fs = require("fs");
const path = require("path");

const pJson = path.resolve(__dirname, "../package.json");
const pLockJson = path.resolve(__dirname, "../package-lock.json");

const package = JSON.parse(fs.readFileSync(pJson, "utf-8"));
const packageLock = JSON.parse(fs.readFileSync(pLockJson, "utf-8"));

function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);

  let newString = firstPart + replaceChar + lastPart;
  return newString;
}

let v = package.version;

const splits = v.split(".");
const subTwo = parseInt(splits[2]);
const subOne = parseInt(splits[1]);
const subZero = parseInt(splits[0]);

if (subTwo < 9) {
  v = replaceChar(v, subTwo + 1, v.length - 1);
} else if (subOne < 9) {
  v = replaceChar(v, 0, v.length - 1);
  v = replaceChar(v, subOne + 1, v.length - 3);
} else if (subZero < 9) {
  v = replaceChar(v, 0, v.length - 1);
  v = replaceChar(v, 0, v.length - 3);
  v = replaceChar(v, subZero + 1, v.length - 5);
} else {
  console.log("Script not sutiable for further versioning.");
}

package.version = v;
packageLock.version = v;

fs.writeFileSync(pJson, JSON.stringify(package, null, 2));
fs.writeFileSync(pLockJson, JSON.stringify(packageLock, null, 2));
