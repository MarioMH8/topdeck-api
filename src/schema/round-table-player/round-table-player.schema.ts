import { z } from 'zod';

import { DeckListSchema } from '../deck-list';
import { DeckObjectSchema } from '../deck-object';

const RoundTablePlayerSchema = z
	.object({
		decklist: DeckListSchema.nullish(),
		deckObj: DeckObjectSchema.nullish(),
		discord: z.coerce.string().nullish(),
		id: z.coerce
			.string()
			.transform(value => (value === 'undefined' ? undefined : value))
			.nullish(),
		name: z.coerce.string(),
	})
	.strict()
	.transform(value => {
		let transformedValue = value;
		if (!transformedValue.deckObj || Object.keys(transformedValue.deckObj).length === 0) {
			const { deckObj, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}
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
