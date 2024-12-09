import { z } from 'zod';

import { DateSchema } from '../date';
import GameFormatSchema from '../game-format/game-format.schema';

const TournamentInfoSchema = GameFormatSchema.and(
	z.object({
		name: z.coerce.string(),
		startDate: DateSchema,
	})
);

export default TournamentInfoSchema;
