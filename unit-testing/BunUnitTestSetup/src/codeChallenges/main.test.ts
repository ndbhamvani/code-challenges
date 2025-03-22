import { describe, it, expect } from 'bun:test';
import { noBoringZeros, buildString, nextId } from './main';

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



describe("Basic test", () => {
    it("Should pass basic tests", () => {
        expect(nextId([0,1,2,3,5])).toEqual(4);
        expect(nextId([0,1,2,3,4,5,6,7,8,9,10])).toEqual(11);
        expect(nextId([20,0,23,18])).toEqual(1);
        expect(nextId([0,1,2,2,3])).toEqual(4);
        expect(nextId([9,13,28,1,9,22,25,10,30,30,5,6,6,13,0,26,19,10,4,11,28,19,30,8,3,3,2,13,26])).toEqual(7);
    });
  });

