export interface User {
	readonly _id: string;
	readonly username: string;
	readonly role: 'anon' | 'user' | 'bot' | 'halfmod' | 'mod' | 'admin' | 'sysop' | 'banned';
	readonly ts?: Date;
	readonly botmaster?: string;

	readonly badges: {
		readonly id: string;
		readonly label: string;
		readonly group?: string;
		readonly ts?: string;
	}[];

	readonly xp: number;

	readonly gamesplayed: number;
	readonly gameswon: number;
	readonly gametime: number;

	readonly country?: string;
	readonly badstanding?: boolean;

	readonly supporter: boolean;
	readonly supporter_tier: number;
	readonly verified: boolean;

	readonly league: {
		readonly gamesplayed: number;
		readonly gameswon: number;

		readonly rating: number;
		readonly rank:
			| 'd'
			| 'd+'
			| 'c-'
			| 'c'
			| 'c+'
			| 'b-'
			| 'b'
			| 'b+'
			| 'a-'
			| 'a'
			| 'a+'
			| 's-'
			| 's'
			| 's+'
			| 'ss'
			| 'u'
			| 'x'
			| 'z';
		readonly bestrank: Exclude<User['league']['rank'], 'z'>;

		readonly glicko?: number;
		readonly rd?: number;

		readonly apm?: number;
		readonly pps?: number;
		readonly vs?: number;
		readonly decaying: boolean;

		readonly standing: number;
		readonly standing_local: number;

		readonly next_rank?: MiddleRanks | null;
		readonly prev_rank?: MiddleRanks | null;

		readonly next_at: number;
		readonly prev_at: number;

		readonly percentile: number;
		readonly percentile_rank: User['league']['rank'];
	};

	readonly avatar_revision?: number;
	readonly banner_revision?: number;
	readonly bio?: string;

	readonly connections: {
		readonly discord?: {
			readonly id: string;
			readonly username: string;
		};
	};

	readonly friend_count: number;
	readonly distinguishment?: {
		readonly type: string;
	};
}

export interface Record {
	readonly records: {
		'40l': {
			readonly record: {
				readonly _id: string;
				readonly stream: `${'40l' | 'blitz' | 'any'}_${'global' | 'userbest' | 'userrecent'}${
					| ''
					| `_${'userbest' | 'userrecent' | string}`}`;
				readonly replayid: string;

				readonly user: {
					readonly _id: string;
					readonly username: string;
				};

				readonly ts: Date;
				readonly ismulti?: boolean;
				readonly endcontext: Record<unknown, unknown>[] | Record<unknown, unknown>;
			};

			rank: number | null;
		};
		blitz: {
			readonly record: {
				readonly _id: string;
				readonly stream: `${'40l' | 'blitz' | 'any'}_${'global' | 'userbest' | 'userrecent'}${
					| ''
					| `_${'userbest' | 'userrecent' | string}`}`;
				readonly replayid: string;

				readonly user: {
					readonly _id: string;
					readonly username: string;
				};

				readonly ts: Date;
				readonly ismulti?: boolean;
				readonly endcontext: Record<unknown, unknown>[] | Record<unknown, unknown>;
			};

			rank: number | null;
		};
	};

	readonly zen: {
		readonly level: number;
		readonly score: number;
	};
}

export interface TetraLeagueRecord {
	readonly _id: string;
	readonly stream: `${'40l' | 'blitz' | 'any'}_${'global' | 'userbest' | 'userrecent'}${
		| ''
		| `_${'userbest' | 'userrecent' | string}`}`;
	readonly replayid: string;

	readonly user: {
		readonly _id: string;
		readonly username: string;
	};

	readonly ts: Date;
	readonly ismulti?: boolean;
	readonly endcontext: Record<unknown, unknown>[] | Record<unknown, unknown>;
}
