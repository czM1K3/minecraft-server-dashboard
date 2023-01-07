import {
	PlayersRouteType,
	ServerRouteType,
	StrippedPlayersRouteType,
	StrippedServerRouteType,
} from "../types/minecraftApi.ts";

const servertapAddress = Deno.env.get("SERVERTAP_ADDRESS");
if (!servertapAddress) throw new Error("SERVERTAP_ADDRESS is not defined");

const servertapKey = Deno.env.get("SERVERTAP_KEY");
const fetchOptions: RequestInit | undefined = servertapKey ? {
	headers: {
		key: servertapKey,
	}
} : undefined;

const ServerRoute = async () => {
	try {
		const result = await fetch(`${servertapAddress}/v1/server`, fetchOptions);
		if (result.ok) {
			const json = await result.json();
			return json as ServerRouteType;
		}
		return null;
	} catch {
		return null;
	}
};

const ServerRouteStripped =
	async (): Promise<null | StrippedServerRouteType> => {
		const data = await ServerRoute();
		if (!data) {
			return null;
		}
		return {
			maxPlayers: data.maxPlayers,
			onlinePlayers: data.onlinePlayers,
			uptime: data.health.uptime,
			version: data.version,
		};
	};

const PlayersRoute = async () => {
	try {
		const result = await fetch(`${servertapAddress}/v1/players`, fetchOptions);
		if (result.ok) {
			const json = await result.json();
			return json as PlayersRouteType;
		}
		return null;
	} catch {
		return null;
	}
};

const PlayersRouteStripped =
	async (): Promise<StrippedPlayersRouteType | null> => {
		const data = await PlayersRoute();
		if (!data) {
			return null;
		}
		return data.map((p) => ({
			dimension: p.dimension,
			displayName: p.displayName,
			gamemode: p.gamemode,
			health: p.health,
			hunger: p.hunger,
			op: p.op,
		}));
	};

const MinecraftApiController = {
	ServerRoute,
	ServerRouteStripped,
	PlayersRoute,
	PlayersRouteStripped,
};

export default MinecraftApiController;
