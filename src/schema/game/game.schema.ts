import { z } from 'zod';

const MagicTheGatheringGameSchema = z.literal('Magic: The Gathering');
const PokemonGameSchema = z.literal('Pokemon');
const YuGiHoGameSchema = z.literal('Yu-Gi-Oh');
const StarWarsUnlimitedGameSchema = z.literal('Star Wars Unlimited');

const OtherGameSchema = z.union([
	z.literal('Altered'),
	z.literal('Digimon'),
	z.literal('Flesh and Blood'),
	z.literal('Lorcana'),
	z.literal('Marvel Snap'),
	z.literal('One Piece'),
	z.literal('Shadowverse: Evolve'),
	z.literal('Sorcery: Contested Realm'),
]);

const GameSchema = z.union([
	MagicTheGatheringGameSchema,
	PokemonGameSchema,
	StarWarsUnlimitedGameSchema,
	YuGiHoGameSchema,
	OtherGameSchema,
]);

export {
	MagicTheGatheringGameSchema,
	OtherGameSchema,
	PokemonGameSchema,
	StarWarsUnlimitedGameSchema,
	YuGiHoGameSchema,
};

export default GameSchema;
