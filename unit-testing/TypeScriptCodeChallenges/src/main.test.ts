import { describe, it, expect } from 'vitest';
import { noBoringZeros } from './main';

describe('noBoringZeros function', () => {
  it('should remove trailing zeros', () => {
    expect(noBoringZeros(1450)).toBe(145);
    expect(noBoringZeros(960000)).toBe(96);
    expect(noBoringZeros(1050)).toBe(105);
    expect(noBoringZeros(-1050)).toBe(-105);
  });
});
