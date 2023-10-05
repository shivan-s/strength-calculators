import schema from './schema';
import type { Actions, PageServerLoad } from './$types';
import { calculateOneRM } from '$lib';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return fail(400, { form });
    }

    const weight = form.data.weight;
    const unit = form.data.unit;
    const reps = form.data.reps;
    const rpe = form.data.rpe;
    const algorithm = form.data.algorithm;

    const oneRM = calculateOneRM({ weight, reps, rpe }, algorithm);

    return message(form, { oneRM: `${oneRM} ${unit}` });
  }
} satisfies Actions;

export const load: PageServerLoad = async () => {
  const form = await superValidate(schema);
  return {
    form,
    pageTitle: 'One RM'
  };
};
