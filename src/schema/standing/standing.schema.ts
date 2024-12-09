import { z } from 'zod';

import { DeckListSchema } from '../deck-list';
import { DeckSnapshotSchema } from '../deck-snapshot';

const StandingSchema = z
	.object({
		decklist: DeckListSchema.optional(),
		deckSnapshot: DeckSnapshotSchema.optional(),
		draws: z.coerce.number().optional(),
		id: z.coerce.string().optional(),
		losses: z.coerce.number().optional(),
		lossesBracket: z.coerce.number().optional(),
		lossesSwiss: z.coerce.number().optional(),
		name: z.coerce.string().optional(),
		winRate: z.coerce.number().optional(),
		winRateBracket: z.coerce.number().optional(),
		winRateSwiss: z.coerce.number().optional(),
		wins: z.coerce.number().optional(),
		winsBracket: z.coerce.number().optional(),
		winsSwiss: z.coerce.number().optional(),
	})
	.transform(value => {
		let transformedValue = value;
		if (!transformedValue.deckSnapshot || Object.keys(transformedValue.deckSnapshot).length === 0) {
			const { deckSnapshot, ...rest } = transformedValue;

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

const StandingArraySchema = z.array(StandingSchema);

export { StandingArraySchema };

export default StandingSchema;
