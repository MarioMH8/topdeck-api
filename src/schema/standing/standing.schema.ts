import { z } from 'zod';

import { DeckListSchema } from '../deck-list';
import { DeckObjectSchema } from '../deck-object';

const StandingSchema = z
	.object({
		commanders: z.array(z.string()).nullish(),
		decklist: DeckListSchema.nullish(),
		deckObj: DeckObjectSchema.nullish(),
		draws: z.coerce.number().nullish(),
		id: z.coerce.string().nullish(),
		losses: z.coerce.number().nullish(),
		lossesBracket: z.coerce.number().nullish(),
		lossesSwiss: z.coerce.number().nullish(),
		name: z.coerce.string().nullish(),
		winRate: z.coerce.number().nullish(),
		winRateBracket: z.coerce.number().nullish(),
		winRateSwiss: z.coerce.number().nullish(),
		wins: z.coerce.number().nullish(),
		winsBracket: z.coerce.number().nullish(),
		winsSwiss: z.coerce.number().nullish(),
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
		if (!transformedValue.commanders || transformedValue.commanders.length === 0) {
			const { commanders, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}

		return transformedValue;
	});

const StandingArraySchema = z.array(StandingSchema);

export { StandingArraySchema };

export default StandingSchema;
