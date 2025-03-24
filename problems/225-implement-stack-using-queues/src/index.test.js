import { describe, expect, test } from '@jest/globals';
import { helloWorld } from './index.js';

describe('Hello World', () => {
  test('Test Hello World', () => {
    expect(helloWorld()).toBe('Hello, World!');
  });
});
