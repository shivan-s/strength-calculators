import { it, describe, expect } from 'vitest';
import { swedishRounding } from './swedishRounding';

describe('swedish rouding', () => {
	it.each([
		{ input: { input: 100, nearest: 5 }, expected: 100 },
		{ input: { input: 101, nearest: 5 }, expected: 100 },
		{ input: { input: 102.5, nearest: 5 }, expected: 105 },

		{ input: { input: 100, nearest: 2.5 }, expected: 100 },
		{ input: { input: 102, nearest: 2.5 }, expected: 102.5 },
		{ input: { input: 101, nearest: 2.5 }, expected: 100 },

		{ input: { input: 100, nearest: 1 }, expected: 100 },
		{ input: { input: 100.1, nearest: 1 }, expected: 100 },
		{ input: { input: 101.5, nearest: 1 }, expected: 102 },

		{ input: { input: 100 }, expected: 100 },
		{ input: { input: 100.1 }, expected: 100 },
		{ input: { input: 101.5 }, expected: 102 }
	])('should work $input gives $expected', async ({ input, expected }) => {
		expect(swedishRounding(input.input, input.nearest)).toBe(expected);
	});
});
