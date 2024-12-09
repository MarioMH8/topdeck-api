import type { infer as inferType } from 'zod';

import StandingDetailSchema from './standing-detail.schema';

export type StandingDetailType = inferType<typeof StandingDetailSchema>;
