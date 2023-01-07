import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { StrippedPlayersRouteType } from "../types/minecraftApi.ts";
import { getTimestamp } from "../utils/timestamp.ts";

type PlayersInfoProps = {
	data: StrippedPlayersRouteType;
};

const PlayersInfo: FunctionalComponent<PlayersInfoProps> = ({ data }) => {
	const [players, setPlayers] = useState(data);

	useEffect(() => {
		const interval = setInterval(() => {
			fetch("/api/players").catch(() => {
				console.error("Failed to fetch")
			}).then(
				async (
					res,
				) => {
					if (res) {
						const data = await res.json();
						setPlayers(data);
					}
				},
			);
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<ul className="list-group">
			{players.map((player) => (
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
	);
};

export default PlayersInfo;
