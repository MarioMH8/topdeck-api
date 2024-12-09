import { TopdeckError } from '../error';
import type { FetcherType } from './fetcher.type';

export default function createTopdeckFetcher<TFetcher extends FetcherType>(
	fetcher: TFetcher = fetch as TFetcher
): TFetcher {
	return async function topdeckFetcher(...arguments_): Promise<unknown> {
		const response = await fetcher(...arguments_);

		if (response.ok) {
			return response.json();
		}
		const object = (await response.json()) as object;
		const status = 'status' in object ? Number(object.status) : undefined;
		const error = 'error' in object ? String(object.error) : undefined;

		throw new TopdeckError(status, error);
	} as TFetcher;
}
