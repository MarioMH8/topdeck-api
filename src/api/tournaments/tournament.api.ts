import { z } from 'zod';
import { createZodFetcher } from 'zod-fetch';

import { InvalidTopdeckArgumentError } from '../../error';
import createTopdeckFetcher from '../../fetcher';
import type { TournamentDetailType, TournamentType } from '../../schema';
import { TournamentArraySchema, TournamentDetailSchema } from '../../schema';
import SearchParametersSchema from './tournament.api.parameters.schema';
import type { SearchParametersType } from './tournament.api.parameters.types';

const fetchWithZod = createZodFetcher(createTopdeckFetcher());

const API_BASE_URL = 'https://topdeck.gg/api';

class TournamentApi {
	constructor(private readonly API_KEY: string) {
		if (!API_KEY) {
			throw new InvalidTopdeckArgumentError('API key is required');
		}
	}

	async find(id: string): Promise<TournamentDetailType> {
		const parsed = z.coerce.string().parse(id);

		return fetchWithZod(TournamentDetailSchema, `${API_BASE_URL}/v2/tournaments/${parsed}`, {
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
}

export default TournamentApi;
