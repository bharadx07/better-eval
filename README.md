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
betterEval('1+1') // returns 2!
```

And its as simple as that!

better-eval will make sure to not leak any variables from the current scope into the execution context.

<b>So - how in the world do we pass our own variables into better-eval?</b>

## Passing Variables
Include any variables as part of an object which you pass in as the second parameter:
```js
const name = "Sam"

betterEval("`Hey ${name}`", {name}) //returns 'Hey Sam'
```

You can also pass functions as a part of the second parameter, and evaluate them in your code:
```js
const returnName = () => "Bob"

betterEval("`Hey ${returnName()}`", {returnName})
```

However, for your safety, usage of the ```Function` constructor and ```eval``` function are disabled, and will not be added to your variables.
```js
betterEval("`Sum is{eval('1+1')}`", {eval}) // eval is null!
```

## License

Better-Eval is [MIT-licensed](LICENSE) open-source software created by Bharadwaj Duggaraju.
