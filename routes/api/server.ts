import { Handlers } from "$fresh/server.ts";
import MinecraftApiController from "../../controllers/minecraftApi.ts";

export const handler: Handlers = {
	GET: async (_req) => {
		const data = await MinecraftApiController.ServerRouteStripped();
		return new Response(JSON.stringify(data), {
			headers: { "Content-Type": "application/json" },
		});
	},
};
