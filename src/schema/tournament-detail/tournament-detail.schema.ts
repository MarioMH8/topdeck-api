import { z } from 'zod';

import { RoundArraySchema } from '../round';
import { StandingDetailArraySchema } from '../standing-detail';
import { TournamentInfoSchema } from '../tournament-info';

const TournamentDetailSchema = z
	.object({
		data: TournamentInfoSchema,
		rounds: RoundArraySchema.optional(),
		standings: StandingDetailArraySchema,
	})
	.strict();

export default TournamentDetailSchema;
