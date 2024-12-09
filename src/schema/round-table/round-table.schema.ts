import { z } from 'zod';

import { RoundTablePlayerArraySchema } from '../round-table-player';

const RoundTableSchema = z
	.object({
		players: RoundTablePlayerArraySchema.optional(),
		status: z.coerce.string(),
		table: z.union([z.coerce.number(), z.coerce.string()]),
		winner: z.coerce
			.string()
			.transform(value => (value === 'undefined' || value === 'null' ? undefined : value))
			.optional(),
		winner_id: z.coerce
			.string()
			.transform(value => (value === 'undefined' || value === 'null' ? undefined : value))
			.optional(),
	})
	.transform(value => {
		let transformedValue = value;
		if (!transformedValue.winner_id) {
			const { winner_id: exclude, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}
		if (!transformedValue.winner) {
			const { winner, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}

		return transformedValue;
	});

const RoundTableArraySchema = z.array(RoundTableSchema);

export { RoundTableArraySchema };

export default RoundTableSchema;
