import z from 'zod';

const schema = z.object({
	oneRM: z
		.number({ required_error: 'One Rep Max is required.' })
		.min(0, 'One Rep Max must be positive.')
		.max(1000, "You aren't that strong, sorry.")
		.default(190),
	targetReps: z
		.number({ required_error: 'Reps are required.' })
		.min(0, 'Reps must be positive.')
		.max(100, "That's too many reps.")
		.default(3),
	targetRPE: z
		.number({ required_error: 'RPE is required.' })
		.min(0.5, 'RPE must be greater that 0.5')
		.max(10, 'RPE must be less than 10.')
		.default(10),
	unit: z
		.union([z.literal('kg'), z.literal('lbs')], {
			required_error: 'Unit is required.'
		})
		.default('kg'),
	nearest: z
		.union([z.literal('5'), z.literal('2.5'), z.literal('1')], {
			required_error: 'Nearest is required.'
		})
		.default('1')
});

export default schema;

export type SchemaType = typeof schema;
