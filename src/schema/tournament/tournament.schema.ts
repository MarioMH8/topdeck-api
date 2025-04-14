import { z } from 'zod';

import { DateSchema } from '../date';
import { EventDataSchema } from '../event-data';
import { FormatSchema } from '../format';
import { GameSchema } from '../game';
import { RoundArraySchema } from '../round';
import { StandingArraySchema } from '../standing';

const TournamentSchema = z
	.object({
		averageElo: z.coerce.number().nullish(),
		eventData: EventDataSchema.nullish(),
		format: FormatSchema,
		game: GameSchema,
		medianElo: z.coerce.number().nullish(),
		modeElo: z.coerce.number().nullish(),
		rounds: RoundArraySchema.nullish(),
		standings: StandingArraySchema,
		startDate: DateSchema,
		swissNum: z.coerce.number().nullish(),
		TID: z.coerce.string(),
		topCut: z.coerce.number().nullish(),
		topElo: z.coerce.number().nullish(),
		tournamentName: z.coerce.string(),
	})
	.strict();

const TournamentArraySchema = z.array(TournamentSchema);

export { TournamentArraySchema };

export default TournamentSchema;
