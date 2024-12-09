import type z from 'zod';

import StandingDetailSchema from './standing-detail.schema';

export type StandingDetailType = z.infer<typeof StandingDetailSchema>;
