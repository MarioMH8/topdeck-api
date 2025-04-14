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
		.describe(
			'An array specifying which player columns to include in the response. Default: ["decklist", "wins", "draws", "losses"]'
		)
		.nullish(),
	end: z.coerce
		.number()
		.describe(
			'The Unix timestamp (in seconds) indicating the latest end date for the tournaments to be included in the response.'
		)
		.nullish(),
	last: z.coerce.number().describe('The number of days back from today to include tournaments.').nullish(),
	participantMax: z.coerce.number().describe('The maximum number of participants to include.').nullish(),
	participantMin: z.coerce.number().describe('The minimum number of participants to include.').nullish(),
	players: z
		.array(z.union([z.literal('name'), z.literal('id'), z.literal('decklist')]))
		.default(['name', 'id', 'decklist'])
		.describe(
			'An array specifying which player details to include in the response. Default: ["name", "id", "decklist"]'
		)
		.nullish(),
	rounds: z
		.union([z.boolean(), z.array(z.union([z.literal('round'), z.literal('tables')]))])
		.default(false)
		.describe(
			'An array specifying which round details to include in the response. This is default set to false. If set to true, the default is: ["round", "tables"]'
		)
		.nullish(),
	start: z.coerce
		.number()
		.describe(
			'The Unix timestamp (in seconds) indicating the earliest start date for the tournaments to be included in the response.'
		)
		.nullish(),
	tables: z
		.array(z.union([z.literal('table'), z.literal('players'), z.literal('winner'), z.literal('status')]))
		.default(['table', 'players', 'winner', 'status'])
		.describe(
			'An array specifying which table details to include in the response. Default: ["table", "players", "winner", "status"]'
		)
		.nullish(),
	TID: z
		.union([z.coerce.string(), z.array(z.coerce.string())])
		.describe('The ID of the tournament. Can be a single string or an array of strings for multiple tournaments.')
		.nullish(),
});

const SearchParametersSchema = GameFormatSchema.and(OptionalSearchParametersSchema);

export default SearchParametersSchema;
