import type z from 'zod';

import PlayerStandingSchema from './standing-detail.schema';

export type PlayerStandingType = z.infer<typeof PlayerStandingSchema>;
