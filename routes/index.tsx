import type { FunctionalComponent } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { StrippedServerRouteType } from "../types/minecraftApi.ts";
import MinecraftApiController from "../controllers/minecraftApi.ts";
import Error from "../components/Error.tsx";
import ServerInfo from "../islands/ServerInfo.tsx";

const serverAddress = Deno.env.get("SERVER_ADDRESS") ?? "localhost";
const serverName = Deno.env.get("SERVER_NAME") ?? "My Server name";

type Props = StrippedServerRouteType | null;

export const handler: Handlers<Props> = {
	GET: async (_, ctx) => {
		const server = await MinecraftApiController.ServerRouteStripped();

		return ctx.render(server);
	},
};

const Home: FunctionalComponent<PageProps<Props>> = ({ data }) => {
	if (!data) {
		return <Error />;
	}
	return (
		<Layout>
			<div
				className="justify-content-center align-items-center d-flex vh-100 flex-column"
				style={{
					height: "max-content",
				}}
			>
				<h1 className="text-white fw-bold">{serverName}</h1>
				<h2 className="text-white">
					{`Join at: `}
					<span className="fw-bold">{serverAddress}</span>
				</h2>

				<ServerInfo data={data} />

				<div className="d-flex">
					<a href="/players" className="btn btn-rounded btn-primary m-1">
						Players
					</a>
					<a href="/map" className="btn btn-rounded btn-primary m-1">
						Map
					</a>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
