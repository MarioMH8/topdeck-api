import type { infer as inferType } from 'zod';

import RoundTablePlayerSchema from './round-table-player.schema';

export type RoundTablePlayerType = inferType<typeof RoundTablePlayerSchema>;
