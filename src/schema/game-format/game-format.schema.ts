import { z } from 'zod';

import {
	MagicTheGatheringFormatSchema,
	PokemonFormatSchema,
	StarWarsUnlimitedFormatSchema,
	YuGiHoFormatSchema,
} from '../format';
import {
	MagicTheGatheringGameSchema,
	OtherGameSchema,
	PokemonGameSchema,
	StarWarsUnlimitedGameSchema,
	YuGiHoGameSchema,
} from '../game';

const MagicTheGatheringGameFormatSchema = z.object({
	format: MagicTheGatheringFormatSchema,
	game: MagicTheGatheringGameSchema,
});

const PokemonGameFormatSchema = z.object({
	format: PokemonFormatSchema,
	game: PokemonGameSchema,
});

const YuGiHoGameFormatSchema = z.object({
	format: YuGiHoFormatSchema,
	game: YuGiHoGameSchema,
});

const StarWarsUnlimitedGameFormatSchema = z.object({
	format: StarWarsUnlimitedFormatSchema,
	game: StarWarsUnlimitedGameSchema,
});

const OtherGameFormatSchema = z.object({
	game: OtherGameSchema,
});

const GameFormatSchema = z.union([
	MagicTheGatheringGameFormatSchema,
	PokemonGameFormatSchema,
	StarWarsUnlimitedGameFormatSchema,
	YuGiHoGameFormatSchema,
	OtherGameFormatSchema,
]);

export {
	MagicTheGatheringGameFormatSchema,
	OtherGameFormatSchema,
	PokemonGameFormatSchema,
	StarWarsUnlimitedGameFormatSchema,
	YuGiHoGameFormatSchema,
};

export default GameFormatSchema;
