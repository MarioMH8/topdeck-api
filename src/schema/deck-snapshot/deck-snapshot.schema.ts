import { z } from 'zod';

const DeckSnapshotSchema = z
	.object({
		mainboard: z.record(z.number()),
		sideboard: z.record(z.number()).optional(),
	})
	.strict()
	.transform(value => {
		let transformedValue = value;
		if (!transformedValue.sideboard || Object.keys(transformedValue.sideboard).length === 0) {
			const { sideboard, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}

		return transformedValue;
	});

export default DeckSnapshotSchema;
