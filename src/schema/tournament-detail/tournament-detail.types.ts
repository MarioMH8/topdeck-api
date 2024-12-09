import type { infer as inferType } from 'zod';

import TournamentDetailSchema from './tournament-detail.schema';

export type TournamentDetailType = inferType<typeof TournamentDetailSchema>;
