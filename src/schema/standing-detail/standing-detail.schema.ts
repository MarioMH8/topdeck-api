import { z } from 'zod';

import { DeckListSchema } from '../deck-list';
import { DeckObjectSchema } from '../deck-object';

const StandingDetailSchema = z
	.object({
		decklist: DeckListSchema.nullish(),
		deckObj: DeckObjectSchema.nullish(),
		discord: z.coerce.string().nullish(),
		id: z.coerce.string().nullish(),
		name: z.coerce.string(),
		opponentGameWinRate: z.coerce.number().nullish(),
		opponentWinRate: z.coerce.number(),
		points: z.coerce.number(),
		standing: z.coerce.number(),
		winRate: z.coerce.number().nullish(),
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

const StandingDetailArraySchema = z.array(StandingDetailSchema);

export { StandingDetailArraySchema };

export default StandingDetailSchema;
