import { describe, expect, test } from '@jest/globals';
import MyStack from './index.js';

const tester = (calls, values) => {
  const result = Array(calls.length).fill(null);
  const stack = new MyStack();

  for (let i = 0; i < calls.length; i++) {
    const key = calls[i];
    const value = values[i];
    switch (key) {
      case 'MyStack':
        break;
      case 'push':
        stack.push(value);
        break;
      case 'top':
        result[i] = stack.top()[0];
        break;
      case 'pop':
        result[i] = stack.pop()[0];
        break;
      case 'empty':
        result[i] = stack.empty();
        break;
      default:
        break;
    }
  }
  return result;
};

describe('LIFO Queue', () => {
  test('Test No. 1', () => {
    const calls = ['MyStack', 'push', 'push', 'top', 'pop', 'empty'];
    const values = [[], [1], [2], [], [], []];
    const result = [null, null, null, 2, 2, false];
    expect(tester(calls, values)).toEqual(result);
  });
});
