import type z from 'zod';

import type SearchParametersSchema from './tournament.api.parameters.schema';

export type SearchParametersType = z.infer<typeof SearchParametersSchema>;
