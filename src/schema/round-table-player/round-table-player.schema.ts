import { z } from 'zod';

import { DeckListSchema } from '../deck-list';

const RoundTablePlayerSchema = z
	.object({
		decklist: DeckListSchema,
		discord: z.coerce.string().optional(),
		id: z.coerce
			.string()
			.transform(value => (value === 'undefined' ? undefined : value))
			.optional(),
		name: z.coerce.string(),
	})
	.strict()
	.transform(value => {
		let transformedValue = value;
		if (!transformedValue.decklist) {
			const { decklist, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}

		return transformedValue;
	});

const RoundTablePlayerArraySchema = z.array(RoundTablePlayerSchema);

export { RoundTablePlayerArraySchema };

export default RoundTablePlayerSchema;
