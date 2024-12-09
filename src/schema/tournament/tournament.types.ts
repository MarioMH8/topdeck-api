import type { infer as inferType } from 'zod';

import TournamentSchema from './tournament.schema';

export type TournamentType = inferType<typeof TournamentSchema>;
