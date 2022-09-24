import { Handlers, PageProps } from "$fresh/server.ts";
import { FunctionalComponent } from "preact";
import Layout from "../components/Layout.tsx";
import MinecraftApiController from "../controllers/minecraftApi.ts";
import { PlayersRouteType } from "../types/minecraftApi.ts";
import Error from "../components/Error.tsx";

export const handler: Handlers<PlayersRouteType | null> = {
  GET: async (_, ctx) => {
    const players = await MinecraftApiController.PlayersRoute();

    return ctx.render(players);
  },
};

const Home: FunctionalComponent<PageProps<PlayersRouteType | null>> = ({ data }) => {
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
          <ul className="list-group">
            {data.map((player) => (
              <li className="list-group-item text-center" key={player.displayName}>
                <h2>{player.displayName}</h2>
                <div>HP: {player.health}/20</div>
                <div>Hunger: {player.hunger}/20</div>
                <div>Dimension: {player.dimension}</div>
                <div>Role: {player.op ? "Admin" : "Player"}</div>
                {player.gamemode !== "SURVIVAL" && (
                  <div>Gamemode: {player.gamemode}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
