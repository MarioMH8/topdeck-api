import { z } from 'zod';

import { RoundArraySchema } from '../round';
import { StandingDetailArraySchema } from '../standing-detail';
import { TournamentInfoSchema } from '../tournament-info';

const TournamentDetailSchema = z
	.object({
		data: TournamentInfoSchema,
		rounds: RoundArraySchema.nullish(),
		standings: StandingDetailArraySchema,
	})
	.strict();

export default TournamentDetailSchema;
