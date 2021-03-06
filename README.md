# eslint-plugin-baitshop-hooks

[![npm](https://img.shields.io/npm/v/eslint-plugin-baitshop-hooks)](https://npmjs.com/package/eslint-plugin-baitshop-hooks)
[![license](https://img.shields.io/github/license/aarongoin/eslint-plugin-baitshop-hooks)](https://github.com/aarongoin/eslint-plugin-baitshop-hooks/blob/master/LICENSE)
[![issues](https://img.shields.io/github/issues/aarongoin/baitshop)](https://github.com/aarongoin/eslint-plugin-baitshop-hooks/issues)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

This is an ESLint plugin which extends and replaces React's "react-hooks/rules-of-hooks" eslint rule to support the use of hooks inside the [baitshop](https://github.com/aarongoin/baitshop) Hook's onRender() method. It does not include the "react-hooks/exhaustive-deps" rule so you'll need to configure that rule separately if you want the full [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) eslint experience.

The code provided here is mostly copied directly from the react eslint plugin with very little modification to support baitshop.

## Installation

Assuming you already have ESLint installed, run:

```sh
# npm
npm install eslint-plugin-baitshop-hooks --save-dev

# yarn
yarn add eslint-plugin-baitshop-hooks --dev
```

Then extend the recommended eslint config:

```js
{
  "extends": [
    // ...
    "plugin:baitshop-hooks/recommended"
  ]
}
```

### Custom Configuration

If you want more fine-grained configuration, you can instead add a snippet like this to your ESLint configuration file:

```js
{
  "plugins": [
    // ...
    "baitshop-hooks"
  ],
  "rules": {
    // ...
    "baitshop-hooks/rules-of-hooks": "error",
  }
}
```

## Valid and Invalid Examples

Please refer to the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) documentation and the [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#what-exactly-do-the-lint-rules-enforce) to learn more about this rule.

## License

BSD-3-Clause
