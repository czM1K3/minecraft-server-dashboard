import { PlayersRouteType, ServerRouteType } from "../types/minecraftApi.ts";

const serverAddress = Deno.env.get("SERVERTAP_ADDRESS");
if (!serverAddress) throw new Error("SERVERTAP_ADDRESS is not defined");

const ServerRoute = async () => {
	try {
		const result = await fetch(`${serverAddress}/v1/server`);
		if (result.ok) {
			const json = await result.json();
			return json as ServerRouteType;
		}
		return null;
	} catch {
		return null;
	}
};

const PlayersRoute = async () => {
	try {
		const result = await fetch(`${serverAddress}/v1/players`);
		if (result.ok) {
			const json = await result.json();
			return json as PlayersRouteType;
		}
		return null;
	} catch {
		return null;
	}
};

const MinecraftApiController = {
	ServerRoute,
	PlayersRoute,
};

export default MinecraftApiController;
