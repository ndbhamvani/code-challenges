import { describe, it, expect } from 'vitest';
import { noBoringZeros, buildString } from './main';

describe('noBoringZeros function', () => {
    it('should remove trailing zeros', () => {
        expect(noBoringZeros(1450)).toBe(145);
        expect(noBoringZeros(960000)).toBe(96);
        expect(noBoringZeros(1050)).toBe(105);
        expect(noBoringZeros(-1050)).toBe(-105);
    });
});



describe('buildString function', () => {
    it('should correctly build a string', () => {
        expect(buildString('Cheese','Milk','Chocolate')).toBe('I like Cheese, Milk, Chocolate!');
        expect(buildString('Cheese','Milk')).toBe('I like Cheese, Milk!');
        expect(buildString('Cheese')).toBe('I like Cheese!');
        expect(buildString('$%&!')).toBe('Not a valid value!');
        expect(buildString()).toBe('Not a valid value!');
        expect(buildString('')).toBe('Not a valid value!');
        expect(buildString('Cheese','','Milk')).toBe('Not a valid value!');
        //expect(buildString(234)).toBe('Unexpected value!');
        //expect(buildString(undefined)).toBe('Unexpected value!');
        //expect(buildString('Cheese', 'Milk', null)).toBe('Unexpected value!');
    })
})


