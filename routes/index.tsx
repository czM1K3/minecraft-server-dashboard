import type { FunctionalComponent } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { ServerRouteType } from "../types/minecraftApi.ts";
import MinecraftApiController from "../controllers/minecraftApi.ts";
import Error from "../components/Error.tsx";
import { getTimestamp } from "../utils/timestamp.ts";

type Props = ServerRouteType | null;

export const handler: Handlers<Props> = {
  GET: async (_, ctx) => {
    const server = await MinecraftApiController.ServerRoute();

    return ctx.render(server);
  },
};

const Home: FunctionalComponent<PageProps<Props>> = ({ data }) => {
  if (!data)
    return <Error />
  return (
    <Layout>
      <div
        className="justify-content-center align-items-center d-flex vh-100 flex-column"
        style={{
          height: "max-content"
        }}
      >
        <h1 className="text-white fw-bold">{data.motd}</h1>

        <p className="text-white m-0">Currently playing: {data.onlinePlayers}/{data.maxPlayers}</p>
        <p className="text-white m-0">Version: {data.version}</p>
        <p className="text-white">Uptime: {getTimestamp(data.health.uptime)}</p>

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
}

export default Home;
