import type { infer as inferType } from 'zod';

import type GameFormatSchema from './game-format.schema';
import type {
	MagicTheGatheringGameFormatSchema,
	OtherGameFormatSchema,
	PokemonGameFormatSchema,
	StarWarsUnlimitedGameFormatSchema,
	YuGiHoGameFormatSchema,
} from './game-format.schema';

type GameFormatType = inferType<typeof GameFormatSchema>;
type OtherGameFormatType = inferType<typeof OtherGameFormatSchema>;
type MagicTheGatheringGameFormatType = inferType<typeof MagicTheGatheringGameFormatSchema>;
type PokemonGameFormatType = inferType<typeof PokemonGameFormatSchema>;
type YuGiHoGameFormatType = inferType<typeof YuGiHoGameFormatSchema>;
type StarWarsGameFormatType = inferType<typeof StarWarsUnlimitedGameFormatSchema>;

export type {
	GameFormatType,
	MagicTheGatheringGameFormatType,
	OtherGameFormatType,
	PokemonGameFormatType,
	StarWarsGameFormatType,
	YuGiHoGameFormatType,
};
