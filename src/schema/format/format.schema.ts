import { z } from 'zod';

const MagicTheGatheringFormatSchema = z.union([
	z.literal('EDH'),
	z.literal('Pauper EDH'),
	z.literal('Standard'),
	z.literal('Pioneer'),
	z.literal('Modern'),
	z.literal('Legacy'),
	z.literal('Pauper'),
	z.literal('Vintage'),
	z.literal('Premodern'),
	z.literal('Limited'),
	z.literal('Timeless'),
	z.literal('Historic'),
	z.literal('Explorer'),
	z.literal('Oathbreaker'),
]);

const PokemonFormatSchema = z.union([z.literal('Standard'), z.literal('Expanded'), z.literal('Legacy')]);

const YuGiHoFormatSchema = z.union([
	z.literal('Advanced'),
	z.literal('Edison'),
	z.literal('Goat'),
	z.literal('Domain'),
]);

const StarWarsUnlimitedFormatSchema = z.union([z.literal('Premier'), z.literal('Draft')]);

const FormatSchema = z.union([
	MagicTheGatheringFormatSchema,
	PokemonFormatSchema,
	StarWarsUnlimitedFormatSchema,
	YuGiHoFormatSchema,
]);

export { MagicTheGatheringFormatSchema, PokemonFormatSchema, StarWarsUnlimitedFormatSchema, YuGiHoFormatSchema };

export default FormatSchema;
