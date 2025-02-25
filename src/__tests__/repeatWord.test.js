import { repeatWord } from '../repeatWord.js';

describe('tests for repeatWord function', () => {
    it('should return repeated word with count 3', () => {
        expect(repeatWord('слово', 3)).toBe('слово1, слово2, слово3');
    }),
    it('should return numbers when word is empty', () => {
        expect(repeatWord('', 3)).toBe('1, 2, 3');
    }),
    it('should return empty string when count is 0', () => {
        expect(repeatWord('слово', 0)).toBe('');
    }),
    it('should return empty string when count is negative', () => {
        expect(repeatWord('слово', -5)).toBe('');
    }),
    it('should return empty string when count is non-numeric', () => {
        expect(repeatWord('слово', 'три')).toBe('');
    }),
    it('should return repeated null values when word is null', () => {
        expect(repeatWord(null, 3)).toBe('null1, null2, null3');
    });
})