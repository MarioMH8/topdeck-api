import { z } from 'zod';

import { RoundTableArraySchema } from '../round-table';

const RoundSchema = z.object({
	round: z.union([z.coerce.number(), z.coerce.string()]),
	tables: RoundTableArraySchema,
});

const RoundArraySchema = z.array(RoundSchema);

export { RoundArraySchema };

export default RoundSchema;
