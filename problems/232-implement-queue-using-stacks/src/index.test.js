import { describe, expect, test } from '@jest/globals';
import MyQueue from './index.js';

const tester = (calls, values) => {
  const result = Array(calls.length).fill(null);
  const stack = new MyQueue();

  for (let i = 0; i < calls.length; i++) {
    const key = calls[i];
    const value = values[i];
    switch (key) {
      case 'MyQueue':
        break;
      case 'push':
        stack.push(value);
        break;
      case 'peek':
        result[i] = stack.peek()[0];
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

describe('FIFO Queue', () => {
  test('Test No. 1', () => {
    const calls = ['MyQueue', 'push', 'push', 'peek', 'pop', 'empty'];
    const values = [[], [1], [2], [], [], []];
    const result = [null, null, null, 1, 1, false];
    expect(tester(calls, values)).toEqual(result);
  });
});
