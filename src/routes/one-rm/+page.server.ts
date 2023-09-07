import type { Actions, PageServerLoad } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const weight = formData.get('weight');
		const reps = formData.get('reps');
		const rpe = formData.get('rpe');
		return { success: true, weight, reps, rpe };
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	return {
		pageTitle: 'One RM'
	};
};
