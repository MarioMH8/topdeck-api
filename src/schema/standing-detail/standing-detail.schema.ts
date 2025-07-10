import { z } from 'zod';

import { DeckListSchema } from '../deck-list';

const StandingDetailSchema = z
	.object({
		decklist: DeckListSchema.nullish(),
		deckObj: z.unknown().nullish(),
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
