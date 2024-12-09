import type z from 'zod';

import type GameSchema from './game.schema';
import type {
	MagicTheGatheringGameSchema,
	OtherGameSchema,
	PokemonGameSchema,
	StarWarsUnlimitedGameSchema,
	YuGiHoGameSchema,
} from './game.schema';

type GameType = z.infer<typeof GameSchema>;
type OtherGameType = z.infer<typeof OtherGameSchema>;
type MagicTheGatheringGameType = z.infer<typeof MagicTheGatheringGameSchema>;
type PokemonGameType = z.infer<typeof PokemonGameSchema>;
type YuGiHoGameType = z.infer<typeof YuGiHoGameSchema>;
type StarWarsGameType = z.infer<typeof StarWarsUnlimitedGameSchema>;

export type { GameType, MagicTheGatheringGameType, OtherGameType, PokemonGameType, StarWarsGameType, YuGiHoGameType };
