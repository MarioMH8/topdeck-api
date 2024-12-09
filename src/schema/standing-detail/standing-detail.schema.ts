import { z } from 'zod';

import { DeckListSchema } from '../deck-list';

const StandingDetailSchema = z
	.object({
		decklist: DeckListSchema,
		discordId: z.coerce.string().optional(),
		id: z.coerce.string().optional(),
		name: z.coerce.string(),
		opponentGameWinRate: z.coerce.number().optional(),
		opponentWinRate: z.coerce.number(),
		points: z.coerce.number(),
		standing: z.coerce.number(),
		winRate: z.coerce.number().optional(),
	})
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
