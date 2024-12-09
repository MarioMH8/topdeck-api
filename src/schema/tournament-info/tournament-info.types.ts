import type { infer as inferType } from 'zod';

import TournamentInfoSchema from './tournament-info.schema';

export type TournamentInfoType = inferType<typeof TournamentInfoSchema>;
