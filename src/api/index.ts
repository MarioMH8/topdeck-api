import { InvalidTopdeckArgumentError } from '../error';
import TournamentApi from './tournaments';

class TopdeckApi {
	readonly tournaments: TournamentApi;

	constructor(API_KEY: string) {
		if (!API_KEY) {
			throw new InvalidTopdeckArgumentError('API key is required');
		}
		this.tournaments = new TournamentApi(API_KEY);
	}
}

export default TopdeckApi;
