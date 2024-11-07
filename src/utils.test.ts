import { describe, it, expect } from 'vitest';
import { toUpperCase } from './utils';

describe('utils', () => {
    describe('toUpperCase', () => {
        it('should convert string to upper case', () => {
            expect(toUpperCase('hello')).toBe('HELLO');
            expect(toUpperCase('Hello World')).toBe('HELLO WORLD');
            expect(toUpperCase('')).toBe('');
        });
    });
}); 