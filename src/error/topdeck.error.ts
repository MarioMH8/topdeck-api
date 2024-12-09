export default class TopdeckError extends Error {
	constructor(
		readonly status: number | undefined,
		message: string | undefined
	) {
		super(message);
	}
}
