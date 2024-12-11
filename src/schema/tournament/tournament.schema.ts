import { z } from 'zod';

import { DateSchema } from '../date';
import { FormatSchema } from '../format';
import { GameSchema } from '../game';
import { RoundArraySchema } from '../round';
import { StandingArraySchema } from '../standing';

const TournamentSchema = z
	.object({
		averageElo: z.coerce.number().optional(),
		format: FormatSchema,
		game: GameSchema,
		medianElo: z.coerce.number().optional(),
		modeElo: z.coerce.number().optional(),
		rounds: RoundArraySchema.optional(),
		standings: StandingArraySchema,
		startDate: DateSchema,
		swissNum: z.coerce.number().optional(),
		TID: z.coerce.string(),
		topCut: z.coerce.number().optional(),
		topElo: z.coerce.number().optional(),
		tournamentName: z.coerce.string(),
	})
	.strict();

const TournamentArraySchema = z.array(TournamentSchema);

export { TournamentArraySchema };

export default TournamentSchema;
