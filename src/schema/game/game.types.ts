import type { infer as inferType } from 'zod';

import type GameSchema from './game.schema';
import type {
	MagicTheGatheringGameSchema,
	OtherGameSchema,
	PokemonGameSchema,
	StarWarsUnlimitedGameSchema,
	YuGiHoGameSchema,
} from './game.schema';

type GameType = inferType<typeof GameSchema>;
type OtherGameType = inferType<typeof OtherGameSchema>;
type MagicTheGatheringGameType = inferType<typeof MagicTheGatheringGameSchema>;
type PokemonGameType = inferType<typeof PokemonGameSchema>;
type YuGiHoGameType = inferType<typeof YuGiHoGameSchema>;
type StarWarsGameType = inferType<typeof StarWarsUnlimitedGameSchema>;

export type { GameType, MagicTheGatheringGameType, OtherGameType, PokemonGameType, StarWarsGameType, YuGiHoGameType };
