import type { infer as inferType } from 'zod';

import type DateSchema from './date.schema';

export type DateType = inferType<typeof DateSchema>;
