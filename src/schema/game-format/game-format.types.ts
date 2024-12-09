import type z from 'zod';

import type GameFormatSchema from './game-format.schema';
import type {
	MagicTheGatheringGameFormatSchema,
	OtherGameFormatSchema,
	PokemonGameFormatSchema,
	StarWarsUnlimitedGameFormatSchema,
	YuGiHoGameFormatSchema,
} from './game-format.schema';

type GameFormatType = z.infer<typeof GameFormatSchema>;
type OtherGameFormatType = z.infer<typeof OtherGameFormatSchema>;
type MagicTheGatheringGameFormatType = z.infer<typeof MagicTheGatheringGameFormatSchema>;
type PokemonGameFormatType = z.infer<typeof PokemonGameFormatSchema>;
type YuGiHoGameFormatType = z.infer<typeof YuGiHoGameFormatSchema>;
type StarWarsGameFormatType = z.infer<typeof StarWarsUnlimitedGameFormatSchema>;

export type {
	GameFormatType,
	MagicTheGatheringGameFormatType,
	OtherGameFormatType,
	PokemonGameFormatType,
	StarWarsGameFormatType,
	YuGiHoGameFormatType,
};
