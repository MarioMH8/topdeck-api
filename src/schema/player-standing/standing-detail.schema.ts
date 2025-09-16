import { z } from 'zod';

import { DeckListSchema } from '../deck-list';
import { DeckObjectSchema } from '../deck-object';

const PlayerStandingSchema = z
	.object({
		byes: z.coerce.number(),
		decklist: DeckListSchema.nullish(),
		deckObj: DeckObjectSchema.nullish(),
		discord: z.coerce.string().nullish(),
		gamesDrawn: z.coerce.number(),
		gamesLost: z.coerce.number(),
		gamesPlayed: z.coerce.number(),
		gamesWon: z.coerce.number(),
		name: z.coerce.string(),
		standing: z.coerce.number(),
		winRate: z.coerce.number(),
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

export default PlayerStandingSchema;
