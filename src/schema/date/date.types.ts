import type z from 'zod';

import type DateSchema from './date.schema';

export type DateType = z.infer<typeof DateSchema>;
