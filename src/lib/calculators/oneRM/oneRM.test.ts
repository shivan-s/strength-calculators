import { describe, it, expect } from 'vitest';
import { brzyck, calculateOneRM, epley, lander } from './oneRM';

describe('oneRM', () => {
	it.each([{ input: { weight: 190, rpe: 8.5, reps: 3 } }])(
		'$input passed into brzyck should calculate',
		({ input }) => {
			const result = brzyck(input);
			expect(result).not.toBeNaN();
		}
	);
	it.each([{ input: { weight: 190, rpe: 8.5, reps: 3 } }])(
		'$input passed into epley should calculate',
		({ input }) => {
			const result = epley(input);
			expect(result).not.toBeNaN();
		}
	);
	it.each([{ input: { weight: 190, rpe: 8.5, reps: 3 } }])(
		'$input passed into lander should calculate',
		({ input }) => {
			const result = lander(input);
			expect(result).not.toBeNaN();
		}
	);
	it.each([
		{ input: { weight: 190, rpe: 8.5, reps: 3, rmType: 'brzyck' } },
		{ input: { weight: 190, rpe: 8.5, reps: 3, rmType: 'epley' } },
		{ input: { weight: 190, rpe: 8.5, reps: 3, rmType: 'lander' } }
	])('$input passed into calculateOneRM should calculate', ({ input }) => {
		const { rmType, ...restInput } = input;
		const result = calculateOneRM(
			restInput,
			rmType as 'brzyck' | 'epley' | 'lander'
		);
		expect(result).not.toBeNaN();
	});
	it('calculateOneRm should error', () => {
		const input = { weight: 190, rpe: 8.5, reps: 3 };
		const rmType = 'wrong' as 'brzyck' | 'epley' | 'lander';
		const resultFunction = () => calculateOneRM(input, rmType);
		expect(resultFunction).toThrowError('Unknown Type');
	});
});
