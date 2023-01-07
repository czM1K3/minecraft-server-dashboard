import { Handlers, PageProps } from "$fresh/server.ts";
import { FunctionalComponent } from "preact";
import Layout from "../components/Layout.tsx";
import MinecraftApiController from "../controllers/minecraftApi.ts";
import { StrippedPlayersRouteType } from "../types/minecraftApi.ts";
import Error from "../components/Error.tsx";
import PlayersInfo from "../islands/PlayersInfo.tsx";

export const handler: Handlers<StrippedPlayersRouteType | null> = {
  GET: async (_, ctx) => {
    const players = await MinecraftApiController.PlayersRouteStripped();

    return ctx.render(players);
  },
};

const Home: FunctionalComponent<PageProps<StrippedPlayersRouteType | null>> = ({ data }) => {
  if (!data)
    return (
      <Error />
    );
  return (
    <Layout>
      <div
        className="justify-content-center align-items-center d-flex flex-column"
        style={{
          height: "max-content"
        }}
      >
        <a
          href="/"
          className="btn btn-primary btn-rounded"
          style={{
            position: "fixed",
            top: "5px",
            left: "5px",
          }}
        >
          Back
        </a>
        <h1 className="text-white">Players</h1>
        <div
          style={{
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
          }}
        >
          <PlayersInfo data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
