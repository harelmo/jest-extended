export function toBeEmpty(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeEmpty', 'received', '') +
    '\n\n' +
    'Expected value to not be empty received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeEmpty', 'received', '') +
    '\n\n' +
    'Expected value to be empty received:\n' +
    `  ${printReceived(actual)}`;

  const pass = this.equals({}, actual) || isEmptyIterable(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const isEmptyIterable = value => {
  if (typeof value[Symbol.iterator] !== 'function') {
    return false;
  }
  const firstIteration = value[Symbol.iterator]().next();
  return firstIteration.done;
};
