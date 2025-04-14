import type z from 'zod';

import type EventDataSchema from './event-data.schema';

export type EventDataType = z.infer<typeof EventDataSchema>;
