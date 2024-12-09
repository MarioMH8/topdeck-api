import type z from 'zod';

import RoundTableSchema from './round-table.schema';

export type RoundTableType = z.infer<typeof RoundTableSchema>;
