import type { OneRMParams } from "./types";

export function brzyck(params: OneRMParams): number {
	const { weight, reps, rpe } = params;
	return weight * (36 / (37 - reps - (10 - rpe)));
}

export function epley(params: OneRMParams): number {
	const { weight, reps, rpe } = params;
	return weight * (1 + (reps + (10 - rpe)) / 30);
}

export function lander(params: OneRMParams): number {
	const { weight, reps, rpe } = params;
	return (100 * weight) / (101.3 - 2.67123 * (reps + (10 - rpe)));
}

export function calculateOneRM(params: OneRMParams, rmType: 'brzyck' | 'epley' | 'lander'): number {
	let oneRM: number;
	switch (rmType) {
		case 'brzyck':
			oneRM = brzyck(params);
			break;
		case 'epley':
			oneRM = epley(params);
			break;
		case 'lander':
			oneRM = lander(params);
			break;
		default:
			throw new Error('Unknown Type');
	}
	return parseFloat(oneRM.toFixed(1));
}
