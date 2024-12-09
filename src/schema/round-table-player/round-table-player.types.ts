import type z from 'zod';

import RoundTablePlayerSchema from './round-table-player.schema';

export type RoundTablePlayerType = z.infer<typeof RoundTablePlayerSchema>;
