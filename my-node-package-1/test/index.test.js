import { mainFunction } from '../src/index';
import { utilityFunction } from '../src/utils/index';

describe('Main Function Tests', () => {
    test('should return expected result from mainFunction', () => {
        const result = mainFunction();
        expect(result).toBe('expected result'); // Replace with actual expected result
    });
});

describe('Utility Function Tests', () => {
    test('should return expected result from utilityFunction', () => {
        const result = utilityFunction();
        expect(result).toBe('expected utility result'); // Replace with actual expected result
    });
});