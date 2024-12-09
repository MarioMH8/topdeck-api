import type { infer as inferType } from 'zod';

import StandingSchema from './standing.schema';

export type StandingType = inferType<typeof StandingSchema>;
