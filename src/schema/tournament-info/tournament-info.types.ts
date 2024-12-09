import type z from 'zod';

import TournamentInfoSchema from './tournament-info.schema';

export type TournamentInfoType = z.infer<typeof TournamentInfoSchema>;
