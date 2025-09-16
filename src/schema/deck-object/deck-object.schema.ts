import { z } from 'zod';

const DeckObjectCardSchema = z.object({
	count: z.number().min(1),
	id: z.uuidv4(),
});

const DeckObjectSectionSchema = z.record(z.string(), DeckObjectCardSchema);

const DeckObjectSchema = z
	.object({
		Commanders: DeckObjectSectionSchema.nullish(),
		Mainboard: DeckObjectSectionSchema.nullish(),
		Sideboard: DeckObjectSectionSchema.nullish(),
	})
	.strict()
	.transform(value => {
		let transformedValue = value;
		if (!transformedValue.Commanders || Object.keys(transformedValue.Commanders).length === 0) {
			const { Commanders, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}
		if (!transformedValue.Mainboard || Object.keys(transformedValue.Mainboard).length === 0) {
			const { Mainboard, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}
		if (!transformedValue.Sideboard || Object.keys(transformedValue.Sideboard).length === 0) {
			const { Sideboard, ...rest } = transformedValue;

			transformedValue = {
				...rest,
			};
		}

		return transformedValue;
	});

export { DeckObjectCardSchema, DeckObjectSectionSchema };

export default DeckObjectSchema;
