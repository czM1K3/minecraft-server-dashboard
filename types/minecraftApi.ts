export type ServerRouteType = {
	name: string;
	motd: string;
	version: string;
	bukkitVersion: string;
	tps: string;
	health: {
		cpus: number;
		uptime: number;
		totalMemory: number;
		maxMemory: number;
		freeMemory: number;
	};
	bannedIps: {
		target: string;
		source: string;
		reason: string;
		expiration: string;
	}[];
	bannedPlayers: {
		target: string;
		source: string;
		reason: string;
		expiration: string;
	}[];
	whitelistedPlayers: {
		uuid: string;
		name: string;
	}[];
	maxPlayers: number;
	onlinePlayers: number;
};

export type PlayersRouteType = {
	uuid: string;
	displayName: string;
	address: string;
	port: number;
	exhaustion: number;
	exp: number;
	whitelisted: boolean;
	banned: boolean;
	op: boolean;
	balance: number;
	location: number[];
	dimension: string;
	health: number;
	hunger: number;
	saturation: number;
	gamemode: string;
	lastPlayed: number;
}[];
