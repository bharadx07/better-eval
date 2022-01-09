# 🔧 better-eval

> 🚩 better-eval is under development, lacks testing and may have many bugs. Use at your own risk.

### An alternative to the 'eval' function in JavaScript that is faster, easier/better to use, and has less security issues.

The eval function in Javascript has been known for years as a red-flag for evaluating code, and there lacks many alternatives that provide the same simplicity that the original eval function provided. Better-Eval aims to solves this problem by providing a simple package to evaluate any code in Javascript with a variety of options, but without the same security issues and lack of speed that the original eval function had.

[![NPM Version](https://img.shields.io/npm/v/better-eval?style=flat-square&color=FF524C&labelColor=000)](https://www.npmjs.com/package/million) 
 

## Why Better-Eval?

- Small and Lightweight.
- A simple and easy to use API.
- Easily customizable for your needs.
- Fast and Secure.

## Installing Better-Eval

```sh
npm install better-eval
```

## Usage

First, import the package.
```js
const betterEval = require('better-eval')
```

Then call the function with something you want to be evaluated:
```js
betterEval('1+1', 'local') // returns 2!
```

You can notice that the second parameter decides where the code is executed.

```local``` executes the code with a function on the current context.
```vm``` executes the code on a node.js VM

#### Usage with the VM option can be done like this:
```js
betterEval('"Hey!".toUpperCase()') // returns HEY!
```

## License

Better-Eval is [MIT-licensed](LICENSE) open-source software.