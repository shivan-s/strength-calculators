type OneRMParams = {
	weight: number;
	rpe: number;
	reps: number;
};

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
			throw Error('Unknown Type');
	}
	return parseFloat(oneRM.toFixed(1));
}

function brzyck(params: OneRMParams): number {
	const { weight, reps, rpe } = params;
	return weight * (36 / (37 - reps - (10 - rpe)));
}

function epley(params: OneRMParams): number {
	const { weight, reps, rpe } = params;
	return weight * (1 + (reps + (10 - rpe)) / 30);
}

function lander(params: OneRMParams): number {
	const { weight, reps, rpe } = params;
	return (100 * weight) / (101.3 - 2.67123 * (reps + (10 - rpe)));
}

export function calculateTargetWeight(params: {
	oneRM: number;
	targetReps: number;
	targetRPE: number;
}): number {
	const { oneRM, targetReps, targetRPE } = params;
	const estimatedLoad = oneRM * (1 - (targetReps + (10 - targetRPE) - 1) * (1 / 30));
	return parseFloat(estimatedLoad.toFixed(1));
}
