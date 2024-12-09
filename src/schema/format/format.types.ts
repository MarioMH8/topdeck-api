import type { infer as inferType } from 'zod';

import type {
	MagicTheGatheringFormatSchema,
	PokemonFormatSchema,
	StarWarsUnlimitedFormatSchema,
	YuGiHoFormatSchema,
} from './format.schema';

type MagicTheGatheringFormatType = inferType<typeof MagicTheGatheringFormatSchema>;
type PokemonFormatType = inferType<typeof PokemonFormatSchema>;
type YuGiHoFormatType = inferType<typeof YuGiHoFormatSchema>;
type StarWarsUnlimitedFormatType = inferType<typeof StarWarsUnlimitedFormatSchema>;

export type { MagicTheGatheringFormatType, PokemonFormatType, StarWarsUnlimitedFormatType, YuGiHoFormatType };
