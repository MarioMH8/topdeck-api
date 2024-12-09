import type z from 'zod';

import StandingSchema from './standing.schema';

export type StandingType = z.infer<typeof StandingSchema>;
