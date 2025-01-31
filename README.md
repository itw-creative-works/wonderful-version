<p align="center">
  <a href="https://itwcreativeworks.com">
    <img src="https://cdn.itwcreativeworks.com/assets/itw-creative-works/images/logo/itw-creative-works-brandmark-black-x.svg" width="100px">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/itw-creative-works/wonderful-version.svg">
  <br>
  <img src="https://img.shields.io/librariesio/release/npm/wonderful-version.svg">
  <img src="https://img.shields.io/bundlephobia/min/wonderful-version.svg">
  <img src="https://img.shields.io/codeclimate/maintainability-percentage/itw-creative-works/wonderful-version.svg">
  <img src="https://img.shields.io/npm/dm/wonderful-version.svg">
  <img src="https://img.shields.io/node/v/wonderful-version.svg">
  <img src="https://img.shields.io/website/https/itwcreativeworks.com.svg">
  <img src="https://img.shields.io/github/license/itw-creative-works/wonderful-version.svg">
  <img src="https://img.shields.io/github/contributors/itw-creative-works/wonderful-version.svg">
  <img src="https://img.shields.io/github/last-commit/itw-creative-works/wonderful-version.svg">
  <br>
  <br>
  <a href="https://itwcreativeworks.com">Site</a> | <a href="https://www.npmjs.com/package/wonderful-version">NPM Module</a> | <a href="https://github.com/itw-creative-works/wonderful-version">GitHub Repo</a>
  <br>
  <br>
  <strong>wonderful-version</strong> is the official npm module of <a href="https://itwcreativeworks.com">Wonderful Version</a>, a free app for gracefully checking semantic versions instead of throwing errors.
</p>

## 🌐 Wonderful Version Works in Node AND browser environments
Yes, this module works in both Node and browser environments, including compatibility with [Webpack](https://www.npmjs.com/package/webpack) and [Browserify](https://www.npmjs.com/package/browserify)!

## 🦄 Features
* Gracefully check semantic versions instead of throwing errors

<!-- ## 🔑 Getting an API key
You can use so much of `wonderful-version` for free, but if you want to do some advanced stuff, you'll need an API key. You can get one by [signing up for a Wonderful Version account](https://itwcreativeworks.com/signup). -->

## 📦 Install Wonderful Version
### Option 1: Install via npm
Install with npm if you plan to use `wonderful-version` in a Node project or in the browser.
```shell
npm install wonderful-version
```
If you plan to use `wonderful-version` in a browser environment, you will probably need to use [Webpack](https://www.npmjs.com/package/webpack), [Browserify](https://www.npmjs.com/package/browserify), or a similar service to compile it.

```js
const wonderfulVersion = require('wonderful-version');
```

### Option 2: Install via CDN
Install with CDN if you plan to use Wonderful Version only in a browser environment.
```html
<script src="https://cdn.jsdelivr.net/npm/wonderful-version@latest/dist/index.min.js"></script>
<script type="text/javascript">
  var wonderfulVersion = WonderfulVersion;
</script>
```

### Option 3: Use without installation
You can use `wonderful-version` in a variety of ways that require no installation, such as `curl` in terminal/shell.

```shell
# Standard
curl -X POST https://api.itwcreativeworks.com
```

## ⚡️ Usage
### .clean(version)
Cleans a version string by removing non-numeric characters and trailing zeros.
```js
console.log(wonderfulVersion.clean('v1.02.30')); // '1.2.3'
```

### .equals(version1, version2)
Checks if two version strings are equal after cleaning.
```js
console.log(wonderfulVersion.equals('1.0.0', '1')); // true
```

### .lessThan(version1, version2)
Checks if `version1` is less than `version2`.
```js
console.log(wonderfulVersion.lessThan('1.2.3', '1.2.4')); // true
```

### .greaterThan(version1, version2)
Checks if `version1` is greater than `version2`.
```js
console.log(wonderfulVersion.greaterThan('1.2.4', '1.2.3')); // true
```

### .lessThanOrEqual(version1, version2)
Checks if `version1` is less than or equal to `version2`.
```js
console.log(wonderfulVersion.lessThanOrEqual('1.2.3', '1.2.4')); // true
```

### .greaterThanOrEqual(version1, version2)
Checks if `version1` is greater than or equal to `version2`.
```js
console.log(wonderfulVersion.greaterThanOrEqual('1.2.4', '1.2.3')); // true
```

### .is(version1, comparator, version2)
Checks if `version1` is `['===', '!=', '>', '>=', '<', '<=']` to `version2`.
```js
console.log(wonderfulVersion.is('1.2.4', '>=', '1.2.3')); // true
console.log(wonderfulVersion.is('1.2.4', '!=', '1.2.3')); // true
console.log(wonderfulVersion.is('1.2.4', '===', '1.2.4')); // true
```

### .levelDifference(version1, version2)
Determines which version level (`major`, `minor`, or `patch`) `version1` is behind compared to `version2`.
```js
console.log(wonderfulVersion.behindLevel('1.2.3', '2.0.0')); // 'major'
```

## 📘 Using Wonderful Version
After you have followed the install step, you can start using `wonderful-version` to enhance your project.

For a more in-depth documentation of this library and the Wonderful Version service, please visit the official Wonderful Version website.

## 📝 What Can Wonderful Version do?
A far-less-frustrating rendition of semver

## 🗨️ Final Words
If you are still having difficulty, we would love for you to post
a question to [the Wonderful Version issues page](https://github.com/itw-creative-works/wonderful-version/issues). It is much easier to answer questions that include your code and relevant files! So if you can provide them, we'd be extremely grateful (and more likely to help you find the answer!)

## 📚 Projects Using this Library
* [ITW Creative Works](https://itwcreativeworks.com)
* [Somiibo](https://somiibo.com)
* [Slapform](https://slapform.com)
* [StudyMonkey](https://studymonkey.ai)
* [DashQR](https://dashqr.com)
* [Replyify](https://replyify.app)
* [SoundGrail](https://soundgrail.com)
* [Trusteroo](https://trusteroo.com)

Ask us to have your project listed! :)
