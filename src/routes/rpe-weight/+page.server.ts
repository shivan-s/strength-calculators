import schema from './schema';
import type { Actions, PageServerLoad } from './$types';
import { calculateTargetWeight } from '$lib';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { swedishRounding } from '$lib/swedishRounding/swedishRounding';

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const oneRM = form.data.oneRM;
		const targetReps = form.data.targetReps;
		const targetRPE = form.data.targetRPE;
		const unit = form.data.unit;
		const nearest = form.data.nearest;

		const rawTargetWeight = calculateTargetWeight({
			oneRM,
			targetReps,
			targetRPE
		});
		const roundedTargetWeight = swedishRounding(rawTargetWeight, nearest);

		return message(form, { roundedTargetWeight, rawTargetWeight, unit });
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	const form = await superValidate(schema);
	return {
		form,
		pageTitle: 'RPE Weight'
	};
};
