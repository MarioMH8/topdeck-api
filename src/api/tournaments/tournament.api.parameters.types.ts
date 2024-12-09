import type { infer as inferType } from 'zod';

import type SearchParametersSchema from './tournament.api.parameters.schema';

export type SearchParametersType = inferType<typeof SearchParametersSchema>;
