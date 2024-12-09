import type z from 'zod';

import type {
	MagicTheGatheringFormatSchema,
	PokemonFormatSchema,
	StarWarsUnlimitedFormatSchema,
	YuGiHoFormatSchema,
} from './format.schema';

type MagicTheGatheringFormatType = z.infer<typeof MagicTheGatheringFormatSchema>;
type PokemonFormatType = z.infer<typeof PokemonFormatSchema>;
type YuGiHoFormatType = z.infer<typeof YuGiHoFormatSchema>;
type StarWarsUnlimitedFormatType = z.infer<typeof StarWarsUnlimitedFormatSchema>;

export type { MagicTheGatheringFormatType, PokemonFormatType, StarWarsUnlimitedFormatType, YuGiHoFormatType };
