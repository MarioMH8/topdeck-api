import { z } from 'zod';
import { createZodFetcher } from 'zod-fetch';

import { InvalidTopdeckArgumentError } from '../../error';
import createTopdeckFetcher from '../../fetcher';
import type {
	PlayerStandingType,
	RoundTableType,
	RoundType,
	StandingDetailType,
	TournamentDetailType,
	TournamentInfoType,
	TournamentType,
} from '../../schema';
import {
	RoundArraySchema,
	RoundTableArraySchema,
	StandingDetailArraySchema,
	TournamentArraySchema,
	TournamentDetailSchema,
	TournamentInfoSchema,
} from '../../schema';
import PlayerStandingSchema from '../../schema/player-standing/standing-detail.schema';
import SearchParametersSchema from './tournament.api.parameters.schema';
import type { SearchParametersType } from './tournament.api.parameters.types';

const fetchWithZod = createZodFetcher(createTopdeckFetcher());

const API_BASE_URL = 'https://topdeck.gg/api';

const tournamentIdSchema = z.coerce.string().describe('Tournament id');
const playerIdSchema = z.coerce.string().describe('Player id');

class TournamentApi {
	constructor(private readonly API_KEY: string) {
		if (!API_KEY) {
			throw new InvalidTopdeckArgumentError('API key is required');
		}
	}

	async findById(id: string): Promise<TournamentDetailType> {
		const parsed = tournamentIdSchema.parse(id);

		return fetchWithZod(TournamentDetailSchema, `${API_BASE_URL}/v2/tournaments/${parsed}`, {
			headers: {
				Authorization: this.API_KEY,
			},
			method: 'GET',
		});
	}

	async info(id: string): Promise<TournamentInfoType> {
		const parsed = tournamentIdSchema.parse(id);

		return fetchWithZod(TournamentInfoSchema, `${API_BASE_URL}/v2/tournaments/${parsed}/info`, {
			headers: {
				Authorization: this.API_KEY,
			},
			method: 'GET',
		});
	}

	async latestRound(tournamentId: string): Promise<RoundTableType[]> {
		const parsedTournamentId = tournamentIdSchema.parse(tournamentId);

		return fetchWithZod(
			RoundTableArraySchema,
			`${API_BASE_URL}/v2/tournaments/${parsedTournamentId}/rounds/latest`,
			{
				headers: {
					Authorization: this.API_KEY,
				},
				method: 'GET',
			}
		);
	}

	async playerStandings(tournamentId: string, playerId: string): Promise<PlayerStandingType> {
		const parsedTournamentId = tournamentIdSchema.parse(tournamentId);
		const parsedPlayerId = playerIdSchema.parse(playerId);

		return fetchWithZod(
			PlayerStandingSchema,
			`${API_BASE_URL}/v2/tournaments/${parsedTournamentId}/players/${parsedPlayerId}`,
			{
				headers: {
					Authorization: this.API_KEY,
				},
				method: 'GET',
			}
		);
	}

	async rounds(tournamentId: string): Promise<RoundType[]> {
		const parsedTournamentId = tournamentIdSchema.parse(tournamentId);

		return fetchWithZod(RoundArraySchema, `${API_BASE_URL}/v2/tournaments/${parsedTournamentId}/rounds`, {
			headers: {
				Authorization: this.API_KEY,
			},
			method: 'GET',
		});
	}

	async search(parameters: SearchParametersType): Promise<TournamentType[]> {
		const parsed = SearchParametersSchema.parse(parameters);

		return fetchWithZod(TournamentArraySchema, `${API_BASE_URL}/v2/tournaments`, {
			body: JSON.stringify(parsed),
			headers: {
				Authorization: this.API_KEY,
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
	}

	async standings(tournamentId: string): Promise<StandingDetailType[]> {
		const parsedTournamentId = tournamentIdSchema.parse(tournamentId);

		return fetchWithZod(
			StandingDetailArraySchema,
			`${API_BASE_URL}/v2/tournaments/${parsedTournamentId}/standings`,
			{
				headers: {
					Authorization: this.API_KEY,
				},
				method: 'GET',
			}
		);
	}
}

export default TournamentApi;
