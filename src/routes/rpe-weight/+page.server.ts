import type { Actions, PageServerLoad } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const oneRm = formData.get('oneRm');
		const targetReps = formData.get('targetReps');
		const targetRPE = formData.get('targetRPE');
		return { success: true, oneRm, targetReps, targetRPE };
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	return {
		pageTitle: 'RPE Weight'
	};
};
