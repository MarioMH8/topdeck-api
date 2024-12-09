import type z from 'zod';

import RoundSchema from './round.schema';

export type RoundType = z.infer<typeof RoundSchema>;
