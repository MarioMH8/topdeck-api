import process from 'node:process';

import { beforeAll, describe, expect, it } from 'bun:test';

import type {
	PlayerStandingType,
	RoundTableType,
	RoundType,
	StandingDetailType,
	TournamentDetailType,
	TournamentInfoType,
	TournamentType,
} from '../src';
import TopdeckApi from '../src';

const tournaments = [
	[
		'CpusQJZrpf9DwCxhJ35m',
		[
			'wROBh4ndJwjG1u45T5BV',
			'lpbjHXuOstGSaClSbLwT',
			'Uu8MZzGafjs1z8dSI3OS',
			'76DSovVO2mCEDFIh8PCs',
			'UP4WMSdvzBFjfc4lUDGX',
			'xyfM81RewbLmJYHFdhEr',
			'RakqFU3PtYwEWEJuX1zr',
			'mx7FBtM7BnidYCTSmqKB',
		],
	],
	[
		'XeB0Bsb0wb63YVABih9c',
		[
			'8sNIhXMax1kTsRDP5JhH',
			'y6cerZpLJUq8L10JS1Ps',
			'fOzYQEDR2TexFD3nYOOs',
			'Wf5deUA0j17Eys3lsrz5',
			'WPm0Rq0qkhR2zWPdm11z',
			'BBTn3LeuBvAXencgv9cY',
			'fwlsrFOSD6WCydAdYsCk',
			'gzCdUQkaNXX3zq2mULLh',
			'Sj6GbquCR6X8m2QqL8vm',
			'Lyx25XJGCraJW7VThJxs',
			'OA9kzUc879TbqI7T8COV',
		],
	],
	[
		'AGSIZchKVS88tXt3Xf20',
		[
			'AbdD6HRQjuxLzPc2xGMG',
			'fiennaInBrjMbgBbOCyP',
			'GGp5TGqZLzyPVkrw64WQ',
			'8OI85IgcTzy224V9uLJF',
			'wuhD0IqaR77cXcDLQ6ZV',
			'2Qm4lpTl900j7doW43vc',
			'RxODXEj6oKb8cTrAwB6P',
			'HW0BGYUOtC9JGWkq2IAi',
			'FiiEMLVBKhzwFV2Nyr1f',
			'9qLaX6qScsEwdOrXTa09',
			'yxVJHuwY6PgwfBVqqIEW',
			'TT5WnfHgemf5ghoHYQiZ',
		],
	],
	[
		'Prds4TtudmDUYQGy5glf',
		[
			'QdIznURPpfQEKKO5YORwbB8vNTI2',
			'jrkq6K8ox1bLygG091KnG3X74aq1',
			'M0ctXMqFONNcBqzOVdDuPTRoa392',
			'mOPcuzgdQ4R8YN5Yr0yBEIn7Wez1',
			'rDBXZDHX2xgRQikoPh2DQZ7xExw2',
			'MDtDHsLGB8SWWucg8opW2FjGhl32',
			'tifq1nYPgaWhZgeDotAysWJDJ923',
			'pNQQfFQ91Vd632aQBWclWu78FLa2',
			'2HCgRchKmFNdgZhw9ejXp2iZ4no1',
			'6s7cRCNbXWaVsDrVzBpeMTEEGwk2',
			'uHU3tBXzj6cyYCYgy31hZ9lSv2b2',
			'k8AmCV40MAg7xeCFUbbdGMelXfc2',
			'QQtBXdQu3her2mZRZDJqiPpqe1X2',
			'cxpjZsxM4QSgH5pSwpWCrlRJY643',
			'hEocy0ou1rhM6hyyYlotMGXUoBk1',
			'3hZNILQujrcgOLSiCigiW1zkWyI2',
			'KRhbXZtyq9RJxXzKmAY2uk1JJcb2',
			'ETE9gtPlD9OuDxOswfCHW78YQSW2',
		],
	],
	[
		'SHvK2nViBz7hAcxIWLYS',
		[
			'd2w4cNZJHyl9JCuRvkkj',
			'8WjalUoWJYWCTLnHM1yB',
			'YiF95RhrS5ktTqgxPH61',
			'XDlJPGsPzcm1Vo17clF7',
			'PxOOJhN7bHOWAW7Arczc',
			'sD4psyy1Yn9eulrPUMNW',
			'dfkAUc72tP0M2uaD2415',
			'd2zFPunY39FZMpSMeU3g',
		],
	],
] as [string, string[]][];

describe('topdeck-api', () => {
	let api: TopdeckApi;
	beforeAll(() => {
		api = new TopdeckApi(process.env['API_KEY'] ?? '');
	});
	describe('tournaments', () => {
		describe('search()', () => {
			it('should return a list of tournaments', () => {
				const from = new Date('2024-12-01');
				const to = new Date('2024-12-01');

				from.setHours(1, 0, 0, 0);
				to.setHours(24, 59, 59, 999);

				const fromTS = from.getTime() / 1000;
				const toTS = to.getTime() / 1000;

				let tournaments: TournamentType[] = [];

				expect(async () => {
					tournaments = await api.tournaments.search({
						end: toTS,
						format: 'EDH',
						game: 'Magic: The Gathering',
						start: fromTS,
					});
				}).not.toThrow();

				expect(tournaments).toMatchSnapshot();
			}, 30_000);
			it('should return a list of tournaments with rounds', () => {
				const from = new Date('2024-12-01');
				const to = new Date('2024-12-01');

				from.setHours(1, 0, 0, 0);
				to.setHours(24, 59, 59, 999);

				const fromTS = from.getTime() / 1000;
				const toTS = to.getTime() / 1000;

				let tournaments: TournamentType[] = [];

				expect(async () => {
					tournaments = await api.tournaments.search({
						end: toTS,
						format: 'EDH',
						game: 'Magic: The Gathering',
						rounds: true,
						start: fromTS,
					});
				}).not.toThrow();

				const players: Map<string, Set<string>> = new Map<string, Set<string>>();

				for (const tournament of tournaments) {
					for (const round of tournament.rounds ?? []) {
						for (const table of round.tables ?? []) {
							for (const player of table.players ?? []) {
								const p = players.get(tournament.TID) ?? new Set<string>();
								if (!players.has(tournament.TID)) {
									players.set(tournament.TID, p);
								}
								if (player.id) {
									p.add(player.id);
								}
							}
						}
					}
				}

				expect(tournaments).toMatchSnapshot();
			}, 30_000);
			it('should return a list of tournaments with columns', () => {
				const from = new Date('2024-12-01');
				const to = new Date('2024-12-01');

				from.setHours(1, 0, 0, 0);
				to.setHours(24, 59, 59, 999);

				const fromTS = from.getTime() / 1000;
				const toTS = to.getTime() / 1000;

				let tournaments: TournamentType[] = [];

				expect(async () => {
					tournaments = await api.tournaments.search({
						columns: [
							'decklist',
							'id',
							'name',
							'draws',
							'losses',
							'lossesBracket',
							'lossesSwiss',
							'winRate',
							'winRateBracket',
							'winRateSwiss',
							'wins',
							'winsBracket',
							'winsSwiss',
							'commanders',
						],
						end: toTS,
						format: 'EDH',
						game: 'Magic: The Gathering',
						rounds: true,
						start: fromTS,
					});
				}).not.toThrow();
				expect(tournaments).toMatchSnapshot();
			}, 30_000);
		});
		describe.each(tournaments)(`tournament('%s')`, (tournament, players) => {
			describe(`findById('${tournament}')`, () => {
				it('should return detail of tournaments', () => {
					let detail: TournamentDetailType | undefined;
					expect(async () => {
						detail = await api.tournaments.findById(tournament);
					}).not.toThrow();
					expect(detail).toMatchSnapshot();
				}, 30_000);
			});
			describe(`info('${tournament}')`, () => {
				it('should return info of tournaments', () => {
					let info: TournamentInfoType | undefined;

					expect(async () => {
						info = await api.tournaments.info(tournament);
					}).not.toThrow();

					expect(info).toMatchSnapshot();
				}, 30_000);
			});
			describe(`latestRound('${tournament}')`, () => {
				it('should return latest round of tournaments', () => {
					let rounds: RoundTableType[] | undefined;

					expect(async () => {
						rounds = await api.tournaments.latestRound(tournament);
					}).not.toThrow();

					expect(rounds).toMatchSnapshot();
				}, 30_000);
			});
			describe.each(players)(`playerStandings('${tournament}', '%s')`, player => {
				it('should return player standing of tournaments', () => {
					let rounds: PlayerStandingType | undefined;

					expect(async () => {
						rounds = await api.tournaments.playerStandings(tournament, player);
					}).not.toThrow();

					expect(rounds).toMatchSnapshot();
				}, 30_000);
			});
			describe(`rounds('${tournament}')`, () => {
				it('should return rounds of tournaments', () => {
					let rounds: RoundType[] | undefined;

					expect(async () => {
						rounds = await api.tournaments.rounds(tournament);
					}).not.toThrow();

					expect(rounds).toMatchSnapshot();
				}, 30_000);
			});
			describe(`standings('${tournament}')`, () => {
				it('should return standings of tournaments', () => {
					let rounds: StandingDetailType[] | undefined;

					expect(async () => {
						rounds = await api.tournaments.standings(tournament);
					}).not.toThrow();

					expect(rounds).toMatchSnapshot();
				}, 30_000);
			});
		});
	});
});
