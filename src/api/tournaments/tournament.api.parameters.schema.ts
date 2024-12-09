import { z } from 'zod';

import GameFormatSchema from '../../schema/game-format/game-format.schema';

const OptionalSearchParametersSchema = z.object({
	columns: z
		.array(
			z.union([
				z.literal('name'),
				z.literal('decklist'),
				z.literal('deckSnapshot'),
				z.literal('commanders'),
				z.literal('wins'),
				z.literal('winsSwiss'),
				z.literal('winsBracket'),
				z.literal('winRate'),
				z.literal('winRateSwiss'),
				z.literal('winRateBracket'),
				z.literal('draws'),
				z.literal('losses'),
				z.literal('lossesSwiss'),
				z.literal('lossesBracket'),
				z.literal('id'),
			])
		)
		.default(['decklist', 'wins', 'draws', 'losses'])
		.optional(),
	end: z.coerce.number().optional(),
	last: z.coerce.number().optional(),
	participantMax: z.coerce.number().optional(),
	participantMin: z.coerce.number().optional(),
	players: z
		.array(z.union([z.literal('name'), z.literal('id'), z.literal('decklist')]))
		.default(['name', 'id', 'decklist'])
		.optional(),
	rounds: z
		.union([z.boolean(), z.array(z.union([z.literal('round'), z.literal('tables')]))])
		.default(false)
		.optional(),
	start: z.coerce.number().optional(),
	tables: z
		.array(z.union([z.literal('table'), z.literal('players'), z.literal('winner'), z.literal('status')]))
		.default(['table', 'players', 'winner', 'status'])
		.optional(),
	TID: z.union([z.coerce.string(), z.array(z.coerce.string())]).optional(),
});

const SearchParametersSchema = GameFormatSchema.and(OptionalSearchParametersSchema);

export default SearchParametersSchema;
