import { z } from 'zod';

const schema = z.object({
	weight: z
		.number({ required_error: 'Weight is required.' })
		.min(0, 'Weight must be positive.')
		.max(1000, "You aren't that strong, sorry.")
		.default(190),
	reps: z
		.number({ required_error: 'Reps are required.' })
		.min(0, 'Reps must be positive.')
		.max(100, "That's too many reps.")
		.default(3),
	rpe: z
		.number({ required_error: 'RPE is required.' })
		.min(0.5, 'RPE must be greater that 0.5')
		.max(10, 'RPE must be less than 10.')
		.default(10),
	unit: z
		.union([z.literal('kg'), z.literal('lbs')], {
			required_error: 'Unit is required'
		})
		.default('kg'),
	algorithm: z
		.union([z.literal('brzyck'), z.literal('epley'), z.literal('lander')], {
			required_error: 'Algorithm is required.'
		})
		.default('brzyck')
});

export type SchemaType = typeof schema;

export default schema;
