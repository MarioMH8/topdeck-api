import type { infer as inferType } from 'zod';

import RoundSchema from './round.schema';

export type RoundType = inferType<typeof RoundSchema>;
