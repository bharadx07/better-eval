# 🔧 better-eval

> 🚩 better-eval is under development, lacks testing and could have bugs. Use at your own risk.

### An alternative to the ```eval()``` function in JavaScript that is faster, easier/better to use, and has less security issues.

The eval function in JS sucks, and there lacks alternatives that provide the same simplicity that the original eval function had. Better-Eval solves this problem by fixing these security & speed issues, and delivering the same simplicity. 

[![NPM Version](https://img.shields.io/npm/v/better-eval?style=flat-square&color=FF524C&labelColor=000)](https://www.npmjs.com/package/better-eval) 
![NPM Downloads](https://img.shields.io/npm/dt/better-eval.svg?style=flat-square&color=FF524C&labelColor=000) 

## Why Better-Eval?

- Small and Lightweight.
- A simple and easy to use API.
- Easily customizable for your needs.
- Fast and Secure.

## Up Next
- Add variables from your current context into the betterEval context.
- Tests.
- Benchmarks - Compare to other options and ```eval()```.

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
```vm``` executes the code on a node.js VM.

### VM Usage
```js
betterEval('"Hey!".toUpperCase()', 'vm') // returns HEY!
```

## License

Better-Eval is [MIT-licensed](LICENSE) open-source software created by Bharadwaj Duggaraju.
