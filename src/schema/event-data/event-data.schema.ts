import { z } from 'zod';

const EventDataSchema = z
	.object({
		city: z.string().nullish(),
		headerImage: z.string().nullish(),
		lat: z.number().nullish(),
		lng: z.number().nullish(),
		location: z.string().nullish(),
		state: z.string().nullish(),
	})
	.strict();

export default EventDataSchema;
