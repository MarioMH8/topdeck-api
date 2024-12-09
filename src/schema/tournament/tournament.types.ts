import type z from 'zod';

import TournamentSchema from './tournament.schema';

export type TournamentType = z.infer<typeof TournamentSchema>;
