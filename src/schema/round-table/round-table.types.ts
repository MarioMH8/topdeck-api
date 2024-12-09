import type { infer as inferType } from 'zod';

import RoundTableSchema from './round-table.schema';

export type RoundTableType = inferType<typeof RoundTableSchema>;
