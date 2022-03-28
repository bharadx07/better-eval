# <img src="https://raw.githubusercontent.com/bharadwajduggaraju/better-eval/master/.github/assets/logo.png" alt="better-eval logo" />

### An alternative to `eval()` in JavaScript that is customizable and safer!

*The eval function **sucks**, lacking any form of security and customizability. Other implementations are **inadequate** - ranging from being abandonded to overcomplicated.* **better-eval** offers a solution, providing a **modern** alternative to the eval function with all the **bells and whistles** out of the box.


<a href="https://www.npmjs.com/package/better-eval">
<img src="https://img.shields.io/npm/v/better-eval?style=flat-square&color=FF524C&labelColor=000" alt="NPM Version">
<img src="https://img.shields.io/npm/dt/better-eval.svg?style=flat-square&color=FF524C&labelColor=000" alt="NPM Version">
<img src="https://badgen.net/badgesize/brotli/https/unpkg.com/better-eval/src?style=flat-square&amp;label=size&amp;color=FF524C&amp;labelColor=000" alt="NPM Version">
</a>
<br /><br />
<a href="https://www.producthunt.com/posts/better-eval?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-better-eval" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=327967&theme=light" alt="better-eval - 🔧 An alternative to 'eval' that is just better! | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Why Better-Eval?

- 🕊 Small and lightweight.
- ⚡ A simple and easy to use API.
- 🛠️ Easily customizable for your needs.
- ✅ Tested and mantained.

## Installation

```sh
npm install better-eval
```

## Usage

First, import the package:

```js
const betterEval = require("better-eval");
```

Then call the function with something you want to be evaluated:

```js
betterEval("1+1"); // returns 2
```

And its as simple as that! Any code will not be able to access variables you define unless explicitly passed.

## Passing Variables

Include any variables as part of an object which you pass in as the second parameter:

```js
const name = "Sam";

betterEval("`Hey ${name}`", { name }); // returns 'Hey Sam'
```

You can also pass functions as a part of the second parameter, and evaluate them in your code:

```js
const returnName = () => "Bob";

betterEval("`Hey ${returnName()}`", { returnName }); // returns 'Hey Bob'
```

## Blacklist

For your safety, any of these global variables on the blacklist will not be added to your variables:

- `global`
- `process`
- `module`
- `require`
- `document`
- `window`
- `Window`
- `eval`
- `Function`

Here is how they will be handled:

```js
betterEval("`Sum is ${eval('1+1')}`", { eval }); // eval is null!
```

> Remember: **never use better-eval blindly with user code.** These checks are precautions for your own usage, but any user with maltious intent could find a way to get through them. Thus, use this package with caution.

## Configuring the VM

If you want to have more control over the VM that runs your code, you can pass in an `vmOptions` parameter:

```js
betterEval(
  "1+1", {},
  {
    fileName: "counting",
    lineOffset: 1,
  }
);
```

A complete list of options can be found [here](https://nodejs.org/api/vm.html#vmrunincontextcode-contextifiedobject-options).

## License

**better-eval** is [MIT-licensed](LICENSE) open-source software created by Bharadwaj Duggaraju.
