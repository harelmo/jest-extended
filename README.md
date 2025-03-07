<div align="center">
  <h1>jest-extended</h1>

🃏💪

Additional Jest matchers

</div>

<hr />

[![Build Status](https://img.shields.io/github/workflow/status/jest-community/jest-extended/GitHub%20CI/main?style=flat-square)](https://github.com/jest-community/jest-extended/actions/workflows/ci.yaml)
[![Code Coverage](https://img.shields.io/codecov/c/github/jest-community/jest-extended.svg?style=flat-square)](https://codecov.io/github/jest-community/jest-extended)
[![version](https://img.shields.io/npm/v/jest-extended.svg?style=flat-square)](https://www.npmjs.com/package/jest-extended)
[![downloads](https://img.shields.io/npm/dm/jest-extended.svg?style=flat-square)](http://npm-stat.com/charts.html?package=jest-extended&from=2017-09-14)
[![MIT License](https://img.shields.io/npm/l/jest-extended.svg?style=flat-square)](https://github.com/jest-community/jest-extended/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md)
[![Examples](https://img.shields.io/badge/%F0%9F%92%A1-examples-ff615b.svg?style=flat-square)](https://github.com/jest-community/jest-extended/tree/main/examples)

## Problem

Jest is an amazing test runner and has some awesome assertion APIs built in by default. However, there are times when
having more specific matchers (assertions) would be far more convenient.

## Solution

jest-extended aims to add additional matchers to Jest's default ones making it easy to test everything 🙌

## Contributing

If you've come here to help contribute - Thanks! Take a look at the [contributing](/CONTRIBUTING.md) docs as a way of getting started.

---

- [Problem](#problem)
- [Solution](#solution)
- [Contributing](#contributing)
- [Installation](#installation)
- [Setup](#setup)
  - [Typescript](#typescript)
- [Asymmetric matchers](#asymmetric-matchers)
- [API](#api)
  - [.pass(message)](#passmessage)
  - [.fail(message)](#failmessage)
  - [.toBeEmpty()](#tobeempty)
  - [.toBeOneOf([members])](#tobeoneofmembers)
  - [.toBeNil()](#tobenil)
  - [.toSatisfy(predicate)](#tosatisfypredicate)
  - [Array](#array)
    - [.toBeArray()](#tobearray)
    - [.toBeArrayOfSize()](#tobearrayofsize)
    - [.toIncludeAllMembers([members])](#toincludeallmembersmembers)
    - [.toIncludeAllPartialMembers([members])](#toincludeallpartialmembersmembers)
    - [.toIncludeAnyMembers([members])](#toincludeanymembersmembers)
    - [.toIncludeSameMembers([members])](#toincludesamemembersmembers)
    - [.toPartiallyContain(member)](#topartiallycontainmember)
    - [.toSatisfyAll(predicate)](#tosatisfyallpredicate)
    - [.toSatisfyAny(predicate)](#tosatisfyanypredicate)
  - [Boolean](#boolean)
    - [.toBeBoolean()](#tobeboolean)
    - [.toBeTrue()](#tobetrue)
    - [.toBeFalse()](#tobefalse)
  - [Date](#date)
    - [.toBeDate()](#tobedate)
    - [.toBeValidDate()](#tobevaliddate)
    - [.toBeAfter(date)](#tobeafterdate)
    - [.toBeBefore(date)](#tobebeforedate)
    - [.toBeAfterOrEqualTo(date)](#tobeafterorequaltodate)
    - [.toBeBeforeOrEqualTo(date)](#tobebeforeorequaltodate)
    - [.toBeBetween(startDate, endDate)](#tobebetweenstartdate-enddate)
    - Further proposals in [#117](https://github.com/jest-community/jest-extended/issues/117) PRs welcome
  - [Function](#function)
    - [.toBeFunction()](#tobefunction)
    - [.toThrowWithMessage()](#tothrowwithmessagetype-message)
  - [Mock](#mock)
    - [.toHaveBeenCalledBefore()](#tohavebeencalledbefore)
    - [.toHaveBeenCalledAfter()](#tohavebeencalledafter)
    - [.toHaveBeenCalledOnce()](#tohavebeencalledonce)
  - [Number](#number)
    - [.toBeNumber()](#tobenumber)
    - [.toBeNaN()](#tobenan)
    - [.toBeFinite()](#tobefinite)
    - [.toBePositive()](#tobepositive)
    - [.toBeNegative()](#tobenegative)
    - [.toBeEven()](#tobeeven)
    - [.toBeOdd()](#tobeodd)
    - [.toBeWithin(start, end)](#tobewithinstart-end)
    - [.toBeInteger()](#tobeinteger)
  - [Object](#object)
    - [.toBeObject()](#tobeobject)
    - [.toBeEmptyObject()](#tobeemptyobject)
    - [.toContainKey(key)](#tocontainkeykey)
    - [.toContainKeys([keys])](#tocontainkeyskeys)
    - [.toContainAllKeys([keys])](#tocontainallkeyskeys)
    - [.toContainAnyKeys([keys])](#tocontainanykeyskeys)
    - [.toContainValue(value)](#tocontainvaluevalue)
    - [.toContainValues([values])](#tocontainvaluesvalues)
    - [.toContainAllValues([values])](#tocontainallvaluesvalues)
    - [.toContainAnyValues([values])](#tocontainanyvaluesvalues)
    - [.toContainEntry([key, value])](#tocontainentrykey-value)
    - [.toContainEntries([[key, value]])](#tocontainentrieskey-value)
    - [.toContainAllEntries([[key, value]])](#tocontainallentrieskey-value)
    - [.toContainAnyEntries([[key, value]])](#tocontainanyentrieskey-value)
    - [.toBeExtensible()](#tobeextensible)
    - [.toBeFrozen()](#tobefrozen)
    - [.toBeSealed()](#tobesealed)
  - [Promise](#promise)
    - [.toResolve()](#toresolve)
    - [.toReject()](#toreject)
  - [String](#string)
    - [.toBeString()](#tobestring)
    - [.toBeHexadecimal(string)](#tobehexadecimal)
    - [.toBeDateString(string)](#tobedatestringstring)
    - [.toEqualCaseInsensitive(string)](#toequalcaseinsensitivestring)
    - [.toStartWith(prefix)](#tostartwithprefix)
    - [.toEndWith(suffix)](#toendwithsuffix)
    - [.toInclude(substring)](#toincludesubstring)
    - [.toIncludeRepeated(substring, times)](#toincluderepeatedsubstring-times)
    - [.toIncludeMultiple([substring])](#toincludemultiplesubstring)
    - [.toEqualIgnoringWhitespace(string)](#toequalignoringwhitespacestring)
  - [Symbol](#symbol)
    - [.toBeSymbol()](#tobesymbol)
- [LICENSE](#license)

## Installation

With npm:

```sh
npm install --save-dev jest-extended
```

With yarn:

```sh
yarn add -D jest-extended
```

## Setup

Note that `jest-extended` only supports Jest version `27.2.5` and newer. If you're using an older version of Jest, use `1.2.1`.

```javascript
// ./testSetup.js

// add all jest-extended matchers
import * as matchers from 'jest-extended';
expect.extend(matchers);

// or just add specific matchers
import { toBeArray, toBeSealed } from 'jest-extended';
expect.extend({ toBeArray, toBeSealed });
```

Add your setup script to your Jest `setupFilesAfterEnv` configuration. [See for help](https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array)

```json
"jest": {
  "setupFilesAfterEnv": ["./testSetup.js"]
}
```

To automatically extend `expect` with all matchers, you can use

```json
"jest": {
  "setupFilesAfterEnv": ["jest-extended/all"]
}
```

### Typescript

If your editor does not recognise the custom `jest-extended` matchers, add a `global.d.ts` file to your project with:

```ts
import 'jest-extended';
```

_Note: When using `ts-jest >= 25.5.0`_

Since the breaking changes in `25.5.0` you may also need to update your `tsconfig.json` to include the new `global.d.ts` file in the `files` property like so:

```json
{
  "compilerOptions": {
    ...
  },
  ...
  "files": ["global.d.ts"]
}
```

Also note that when adding this for the first time this affects which files are compiled by the TypeScript compiler and you might need to add the `include` property as well. See the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more details.

If the above import syntax does not work, replace it with the following:

```ts
/// <reference types="jest-extended" />
```

## Asymmetric matchers

All matchers described in the API are also asymmetrical since [jest version 23](https://jestjs.io/blog/2018/05/29/jest-23-blazing-fast-delightful-testing#custom-asymmetric-matchers):

```js
test('passes when using an asymmetrical matcher', () => {
  expect([]).toEqual(expect.toBeArray());
});
```

## API

#### .pass(message)

Passing assertion.

```js
expect().pass('should pass');
```

#### .fail(message)

Failing assertion.

```js
expect().fail('test should fail');
```

#### .toBeEmpty()

Use `.toBeEmpty` when checking if a `String` `''`, `Array` `[]`, `Object` `{}`, or [`Iterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Built-in_iterables) is empty. Because `toBeEmpty` supports checking for emptiness of Iterables, you can use it to check whether a `Map`, or `Set` is empty, as well as checking that a generator yields no values.

```js
test('passes when given an empty string', () => {
  expect('').toBeEmpty();
  expect('hello').not.toBeEmpty();
});

test('passes when given an empty array', () => {
  expect([]).toBeEmpty();
  expect(['hello']).not.toBeEmpty();
});

test('passes when given an empty object', () => {
  expect({}).toBeEmpty();
  expect({ hello: 'world' }).not.toBeEmpty();
});
```

#### .toBeOneOf([members])

Use `.toBeOneOf` when checking if a value is a member of a given `Array`.

```js
test('passes when value is in given array', () => {
  expect(1).toBeOneOf([1, 2, 3]);
  expect(4).not.toBeOneOf([1, 2, 3]);
});
```

#### .toBeNil()

Use `.toBeNil` when checking a value is `null` or `undefined`.

```js
test('passes when value is null or undefined', () => {
  expect(null).toBeNil();
  expect(undefined).toBeNil();
  expect(true).not.toBeNil();
});
```

#### .toSatisfy(predicate)

Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.

```js
test('passes when value passes given predicate', () => {
  const greaterThanOneButNotThree = n => n > 1 && n !== 3;
  expect(100).toSatisfy(greaterThanOneButNotThree);
  expect(0).not.toSatisfy(greaterThanOneButNotThree);
  expect(3).not.toSatisfy(greaterThanOneButNotThree);
});
```

### Array

#### .toBeArray()

Use `.toBeArray` when checking if a value is an `Array`.

```js
test('passes when value is an array', () => {
  expect([]).toBeArray();
  expect([1]).toBeArray();
  expect(true).not.toBeArray();
});
```

#### .toBeArrayOfSize()

Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.

```js
test('passes when value is an array', () => {
  expect([]).toBeArrayOfSize(0);
  expect([1]).toBeArrayOfSize(1);
  expect(true).not.toBeArrayOfSize(1);
});
```

#### .toIncludeAllMembers([members])

Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.

```js
test('passes when given array values match the members of the set', () => {
  expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAllMembers([2, 1]);
});
```

#### .toIncludeAllPartialMembers([members])

Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all of the same partial members of a given set.

```js
test('passes when given array values match the partial members of the set', () => {
  expect([{ foo: 'bar', baz: 'qux' }]).toIncludeAllPartialMembers([{ foo: 'bar' }]);
});
```

#### .toIncludeAnyMembers([members])

Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.

```js
test('passes when given array values match any of the members in the set', () => {
  expect([1, 2, 3]).toIncludeAnyMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAnyMembers([2]);
  expect([1, 2, 2]).not.toIncludeAnyMembers([3]);
});
```

#### .toIncludeSameMembers([members])

Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.

```js
test('passes when arrays match in a different order', () => {
  expect([1, 2, 3]).toIncludeSameMembers([3, 1, 2]);
  expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([{ baz: 'qux' }, { foo: 'bar' }]);
});
```

#### .toPartiallyContain(member)

Use `.toPartiallyContain` when checking if any array value matches the partial member.

```js
test('passes when a string has a given substring', () => {
  expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).toPartiallyContain({ foo: 'bar' });
  expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).toPartiallyContain({ baz: 'qux' });
  expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).not.toPartiallyContain({ foo: 'qux' });
});
```

#### .toSatisfyAll(predicate)

Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.

```js
test('passes when all values in array pass given predicate', () => {
  const isOdd = el => el % 2 === 1;
  expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
  expect([1, 3, 4, 5, 7]).not.toSatisfyAll(isOdd);
});
```

#### .toSatisfyAny(predicate)

Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.

```js
test('passes when any value in array pass given predicate', () => {
  const isOdd = el => el % 2 === 1;
  expect([2, 3, 6, 8]).toSatisfyAny(isOdd);
  expect([2, 4, 8, 12]).not.toSatisfyAny(isOdd);
});
```

### Boolean

#### .toBeBoolean()

Use `.toBeBoolean` when checking if a value is a `Boolean`.

```js
test('passes when value is a boolean', () => {
  expect(false).toBeBoolean();
  expect(true).toBeBoolean();
  expect(1 === 1).toBeBoolean();
  expect(1).not.toBeBoolean();
});
```

#### .toBeTrue()

Use `.toBeTrue` when checking a value is equal (===) to `true`.

```js
test('is jest cool', () => {
  expect(isJestCool()).toBeTrue();
  expect(false).not.toBeTrue();
});
```

#### .toBeFalse()

Use `.toBeFalse` when checking a value is equal (===) to `false`.

```js
test('returns false', () => {
  expect(areWeThereYet()).toBeFalse();
  expect(true).not.toBeFalse();
});
```

### ~~Date~~

Proposal in #117 (_under development_)

### .toBeDate()

Use `.toBeDate` when checking if a value is a `Date`.

```js
test('passes when value is a date', () => {
  expect(new Date()).toBeDate();
  expect('01/01/2018').not.toBeDate();
  expect(new Date('01/01/2018')).toBeDate();
  expect(undefined).not.toBeDate();
});
```

### .toBeValidDate()

Use `.toBeValidDate` when checking if a given `Date` object is valid.

```js
test('passes when Date is valid', () => {
  expect(new Date()).toBeValidDate();
  expect('01/01/2018').not.toBeValidDate();
  expect(new Date('01/01/2018')).toBeValidDate();
  expect(new Date('01/90/2018')).not.toBeValidDate();
  expect(undefined).not.toBeValidDate();
});
```

### .toBeAfter(date)

Use `.toBeAfter` when checking if a date occurs after `date`.

```js
test('passes when input is after date', () => {
  expect(new Date('01/01/2019')).toBeAfter(new Date('01/01/2018'));
  expect('01/01/2018').not.toBeAfter(new Date('01/01/2019'));
});
```

### .toBeBefore(date)

Use `.toBeBefore` when checking if a date occurs before `date`.

```js
test('passes when input is before date', () => {
  expect(new Date('01/01/2018')).toBeBefore(new Date('01/01/2019'));
  expect('01/01/2019').not.toBeBefore(new Date('01/01/2018'));
});
```

### .toBeAfterOrEqualTo(date)

Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.

```js
test('passes when input is equal to or after date', () => {
  expect(new Date('01/01/2019')).toBeAfterOrEqualTo(new Date('01/01/2018'));
  expect(new Date('01/01/2019')).toBeAfterOrEqualTo(new Date('01/01/2019'));
  expect('01/01/2018').not.toBeAfterOrEqualTo(new Date('01/01/2019'));
});
```

### .toBeBeforeOrEqualTo(date)

Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.

```js
test('passes when input is equal to or before date', () => {
  expect(new Date('01/01/2018')).toBeBeforeOrEqualTo(new Date('01/01/2019'));
  expect(new Date('01/01/2018')).toBeBeforeOrEqualTo(new Date('01/01/2018'));
  expect('01/01/2019').not.toBeBeforeOrEqualTo(new Date('01/01/2018'));
});
```

### .toBeBetween(startDate, endDate)

Use `.toBeBetween` when checking if a date equals or occurs after `startDate` and equals or occurs before `endDate`.

```js
test('passes when input is in given date range', () => {
 expect(new Date('05/01/2019')).toBeBetween(new Date('01/01/2019'), new Date('10/01/2019');
 expect(new Date('05/01/2019')).toBeBetween(new Date('05/01/2019'), new Date('10/01/2019');
 expect(new Date('01/01/2019')).not.toBeBetween(new Date('05/01/2019'), new Date('10/01/2019'));
});
```

### Function

#### .toBeFunction()

Use `.toBeFunction` when checking if a value is a `Function`.

```js
test('passes when value is a function', () => {
  function noop() {}
  expect(() => {}).toBeFunction();
  expect(function () {}).not.toBeFunction();
  expect(noop).toBeFunction();
  expect(true).not.toBeFunction();
});
```

#### .toThrowWithMessage(type, message)

Use `.toThrowWithMessage` when checking if a callback function throws an error with a given error type and given error message. Message can either be a `String` or a `RegExp`.

```js
test('throws an error of type TypeError with message "hello world"', () => {
  expect(() => {
    throw TypeError('hello world');
  }).toThrowWithMessage(TypeError, 'hello world');

  expect(() => {
    throw TypeError('hello world');
  }).toThrowWithMessage(TypeError, /hello world/);

  expect(() => {
    throw TypeError('hello world 2');
  }).not.toThrowWithMessage(TypeError, 'hello world');

  expect(() => {
    throw TypeError('hello world 2');
  }).not.toThrowWithMessage(TypeError, /hello world/);
});
```

This works for promise rejections too.

```js
test('throws an error of type TypeError with message "hello world"', async () => {
  await expect(Promise.reject(new TypeError("hello world async")).rejects.toThrowWithMessage(TypeError, /hello world/);
});
```

### Mock

#### .toHaveBeenCalledBefore()

Use `.toHaveBeenCalledBefore` when checking if a `Mock` was called before another `Mock`.

```js
it('calls mock1 before mock2', () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  mock1();
  mock2();
  mock1();

  expect(mock1).toHaveBeenCalledBefore(mock2);
});
```

#### .toHaveBeenCalledAfter()

Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.

```js
it('calls mock1 after mock2', () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  mock2();
  mock1();
  mock2();

  expect(mock1).toHaveBeenCalledAfter(mock2);
});
```

#### .toHaveBeenCalledOnce()

Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.

```js
it('passes only if mock was called exactly once', () => {
  const mock = jest.fn();

  expect(mock).not.toHaveBeenCalled();
  mock();
  expect(mock).toHaveBeenCalledOnce();
});
```

### Number

#### .toBeNumber()

Use `.toBeNumber` when checking if a value is a `Number`.

```js
test('passes when value is a number', () => {
  expect(1).toBeNumber();
  expect(NaN).toBeNumber();
  expect(Infinity).toBeNumber();
  expect(true).not.toBeNumber();
});
```

#### .toBeNaN()

Use `.toBeNaN` when checking a value is `NaN`.

```js
test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
  expect(1).not.toBeNaN();
});
```

#### .toBeFinite()

Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.

```js
test('passes when value is a finite number', () => {
  expect(1).toBeFinite();
  expect(Infinity).not.toBeFinite();
  expect(NaN).not.toBeFinite();
});
```

#### .toBePositive()

Use `.toBePositive` when checking if a value is a positive `Number`.

```js
test('passes when value is a positive number', () => {
  expect(1).toBePositive();
  expect(Infinity).not.toBePositive();
  expect(-1).not.toBePositive();
  expect(NaN).not.toBePositive();
});
```

#### .toBeNegative()

Use `.toBeNegative` when checking if a value is a negative `Number`.

```js
test('passes when value is a negative number', () => {
  expect(-1).toBeNegative();
  expect(-Infinity).not.toBeNegative();
  expect(1).not.toBeNegative();
  expect(NaN).not.toBeNegative();
});
```

#### .toBeEven()

Use `.toBeEven` when checking if a value is an even `Number`.

```js
test('passes when value is an even number', () => {
  expect(2).toBeEven();
  expect(1).not.toBeEven();
  expect(NaN).not.toBeEven();
});
```

#### .toBeOdd()

Use `.toBeOdd` when checking if a value is an odd `Number`.

```js
test('passes when value is an odd number', () => {
  expect(1).toBeOdd();
  expect(2).not.toBeOdd();
  expect(NaN).not.toBeOdd();
});
```

#### .toBeWithin(start, end)

Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).

```js
test('passes when number is within given bounds', () => {
  expect(1).toBeWithin(1, 3);
  expect(2).toBeWithin(1, 3);
  expect(3).not.toBeWithin(1, 3);
});
```

#### .toBeInteger()

Use `.toBeInteger` when checking if a number is an integer.

```js
test('passes when value is an integer', () => {
  expect(1).toBeInteger();
  expect(1.0).toBeInteger();
  expect(1.1).not.toBeInteger();
});
```

### Object

#### .toBeEmptyObject()

Use `.toBeEmptyObject` when checking if a value is an empty `Object`.

```js
test('passes when value is an empty object', () => {
  expect({}).toBeEmptyObject();
  expect({ a: 'hello' }).not.toBeEmptyObject();
});
```

#### .toBeObject()

Use `.toBeObject` when checking if a value is an `Object`.

```js
test('passes when value is an object', () => {
  expect({}).toBeObject();
  expect({ a: 'hello' }).toBeObject();
  expect(true).not.toBeObject();
});
```

#### .toContainKey(key)

Use `.toContainKey` when checking if an object contains the provided key.

```js
test('passes when object contains the given key', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainKey('a');
  expect(o).toContainKey('b');
  expect(o).toContainKey('c');
  expect(o).not.toContainKey('d');
});
```

#### .toContainKeys([keys])

Use `.toContainKeys` when checking if an object has all of the provided keys.

```js
test('passes when object contains all keys', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainKeys(['a', 'b']);
  expect(o).toContainKeys(['b', 'c']);
  expect(o).not.toContainKeys(['d']);
});
```

#### .toContainAllKeys([keys])

Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.

```js
test('passes when object only contains all keys', () => {
  const o = { a: 'hello', b: 'world' };
  expect(o).toContainAllKeys(['a', 'b']);
  expect(o).toContainAllKeys(['b', 'a']);
  expect(o).not.toContainAllKeys(['b']);
});
```

#### .toContainAnyKeys([keys])

Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.

```js
test('passes when object contains at least one matching key', () => {
  const o = { a: 'hello', b: 'world' };
  expect(o).toContainAnyKeys(['a']);
  expect(o).toContainAnyKeys(['b']);
  expect(o).toContainAnyKeys(['b', 'c']);
  expect(o).not.toContainAnyKeys(['c']);
});
```

#### .toContainValue(value)

Use `.toContainValue` when checking if an object contains the provided value.

```js
test('passes when object contains given value', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainValue('foo');
  expect(o).toContainValue('bar');
  expect(o).not.toContainValue('qux');
});
```

#### .toContainValues([values])

Use `.toContainValues` when checking if an object contains all of the provided values.

```js
test('passes when object contains all of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainValues(['foo']);
  expect(o).toContainValues(['baz', 'bar']);
  expect(o).not.toContainValues(['qux', 'foo']);
});
```

#### .toContainAllValues([values])

Use `.toContainAllValues` when checking if an object only contains all of the provided values.

```js
test('passes when object only contains all of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAllValues(['foo', 'bar', 'baz']);
  expect(o).toContainAllValues(['baz', 'bar', 'foo']);
  expect(o).not.toContainAllValues(['bar', 'foo']);
});
```

#### .toContainAnyValues([values])

Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.

```js
test('passes when object contains at least one of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAnyValues(['qux', 'foo']);
  expect(o).toContainAnyValues(['qux', 'bar']);
  expect(o).toContainAnyValues(['qux', 'baz']);
  expect(o).not.toContainAnyValues(['qux']);
});
```

#### .toContainEntry([key, value])

Use `.toContainEntry` when checking if an object contains the provided entry.

```js
test('passes when object contains given entry', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainEntry(['a', 'foo']);
  expect(o).toContainEntry(['b', 'bar']);
  expect(o).toContainEntry(['c', 'baz']);
  expect(o).not.toContainEntry(['a', 'qux']);
});
```

#### .toContainEntries([[key, value]])

Use `.toContainEntries` when checking if an object contains all of the provided entries.

```js
test('passes when object contains all of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainEntries([['a', 'foo']]);
  expect(o).toContainEntries([
    ['c', 'baz'],
    ['a', 'foo'],
  ]);
  expect(o).not.toContainEntries([
    ['b', 'qux'],
    ['a', 'foo'],
  ]);
});
```

#### .toContainAllEntries([[key, value]])

Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.

```js
test('passes when object only contains all of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAllEntries([
    ['a', 'foo'],
    ['b', 'bar'],
    ['c', 'baz'],
  ]);
  expect(o).not.toContainAllEntries([
    ['a', 'foo'],
    ['b', 'bar'],
  ]);
});
```

#### .toContainAnyEntries([[key, value]])

Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.

```js
test('passes when object contains at least one of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAnyEntries([
    ['a', 'qux'],
    ['a', 'foo'],
  ]);
  expect(o).toContainAnyEntries([
    ['a', 'qux'],
    ['b', 'bar'],
  ]);
  expect(o).toContainAnyEntries([
    ['a', 'qux'],
    ['c', 'baz'],
  ]);
  expect(o).not.toContainAnyEntries([['d', 'qux']]);
});
```

#### .toBeExtensible()

Use `.toBeExtensible` when checking if an object is extensible.

```js
test('passes when value is extensible', () => {
  expect({ a: 1 }).toBeExtensible();
  expect(1).not.toBeExtensible();
});
```

#### .toBeFrozen()

Use `.toBeFrozen` when checking if an object is frozen.

```js
test('passes when value is frozen', () => {
  expect(Object.frozen({})).toBeFrozen();
  expect({}).not.toBeFrozen();
  expect(1).not.toBeFrozen();
});
```

#### .toBeSealed()

Use `.toBeSealed` when checking if an object is sealed.

```js
test('passes when value is sealed', () => {
  expect(Object.seal({})).toBeSealed();
  expect({}).not.toBeSealed();
  expect(1).not.toBeSealed();
});
```

### Promise

#### .toResolve()

Use `.toResolve` when checking if a promise is resolved.

```js
test('passes when a promise resolves', async () => {
  await expect(Promise.resolve()).toResolve();
});
```

#### .toReject()

Use `.toReject` when checking if a promise is rejected.

```js
test('passes when a promise rejects', async () => {
  await expect(Promise.reject()).toReject();
});
```

### String

#### .toBeString()

Use `.toBeString` when checking if a value is a `String`.

```js
test('passes when value is a string', () => {
  expect('').toBeString();
  expect('hello').toBeString();
  expect(new String('hello')).toBeString();
  expect(true).not.toBeString();
});
```

#### .toBeHexadecimal(string)

Use `.toBeHexadecimal` when checking if a value is a valid HTML hexadecimal color.

```js
test('passes when value is a valid hexadecimal', () => {
  expect('#abc123').toBeHexadecimal();
  expect('#FFF').toBeHexadecimal();
  expect('#000000').toBeHexadecimal();
  expect('#123ffg').not.toBeHexadecimal();
});
```

#### .toBeDateString(string)

Use `.toBeDateString` when checking if a value is a valid date string.

```js
test('passes when value is a valid toBeDateString', () => {
  expect('2019-11-27T14:05:07.520Z').toBeDateString();
  expect('11/12/21').toBeDateString();
  expect('not a date').not.toBeDateString();
});
```

#### .toEqualCaseInsensitive(string)

Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.

```js
test('passes when strings are equal ignoring case', () => {
  expect('hello world').toEqualCaseInsensitive('hello world');
  expect('hello WORLD').toEqualCaseInsensitive('HELLO world');
  expect('HELLO WORLD').toEqualCaseInsensitive('hello world');
  expect('hello world').toEqualCaseInsensitive('HELLO WORLD');
  expect('hello world').not.toEqualCaseInsensitive('hello');
});
```

#### .toStartWith(prefix)

Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.

```js
test('passes when value is starts with given string', () => {
  expect('hello world').toStartWith('hello');
  expect('hello world').not.toStartWith('world');
});
```

#### .toEndWith(suffix)

Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.

```js
test('passes when value is ends with given string', () => {
  expect('hello world').toEndWith('world');
  expect('hello world').not.toEndWith('hello');
});
```

#### .toInclude(substring)

Use `.toInclude` when checking if a `String` includes the given `String` substring.

```js
test('passes when value includes substring', () => {
  expect('hello world').toInclude('ell');
  expect('hello world').not.toInclude('bob');
});
```

#### .toIncludeRepeated(substring, times)

Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.

```js
test('passes when value includes substring n times', () => {
  expect('hello hello world').toIncludeRepeated('hello', 2);
  expect('hello hello world').not.toIncludeRepeated('hello', 1);
});
```

#### .toIncludeMultiple([substring])

Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.

```js
test('passes when value includes all substrings', () => {
  expect('hello world').toIncludeMultiple(['world', 'hello']);
  expect('hello world').not.toIncludeMultiple(['world', 'hello', 'bob']);
});
```

#### .toEqualIgnoringWhitespace(string)

Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal to another `String` ignoring white-space.

```js
test('passes if strings are equal ignoring white-space', () => {
  expect('hello world').toEqualIgnoringWhitespace(`
        hello
        world
    `);
  expect('SELECT * FROM TABLE WHERE CONDITION').toEqualIgnoringWhitespace(`
        SELECT * FROM TABLE
        WHERE CONDITION
    `);
  expect('.class { cssRule: value }').not.toEqualIgnoringWhitespace(`
        #id {
            cssRule: value
        }
    `);
});
```

### Symbol

#### .toBeSymbol()

Use `.toBeSymbol` when checking if a value is a `Symbol`.

```js
test('passes when value is a symbol', () => {
  expect(Symbol()).toBeSymbol();
  expect(true).not.toBeSymbol();
});
```

## LICENSE

[MIT](/LICENSE)
