import { z } from 'zod';

import { DeckListSchema } from '../deck-list';

const PlayerStandingSchema = z
	.object({
		byes: z.coerce.number(),
		decklist: DeckListSchema,
		deckObj: z.unknown().nullish(),
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
		if (!transformedValue.decklist) {
			const { decklist, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}

		return transformedValue;
	});

export default PlayerStandingSchema;
