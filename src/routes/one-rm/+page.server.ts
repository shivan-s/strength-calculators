import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const weight = formData.get('weight');
		const reps = formData.get('reps');
		const rpe = formData.get('rpe');

		if (typeof weight !== 'string') {
			throw error(400, 'Bad data in form');
		}
		if (typeof reps !== 'string') {
			throw error(400, 'Bad data in form');
		}
		if (typeof rpe !== 'string') {
			throw error(400, 'Bad data in form');
		}
		return { weight, reps, rpe };
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	return {
		pageTitle: 'One RM'
	};
};
