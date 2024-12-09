import type z from 'zod';

import TournamentDetailSchema from './tournament-detail.schema';

export type TournamentDetailType = z.infer<typeof TournamentDetailSchema>;
