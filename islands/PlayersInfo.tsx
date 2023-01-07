import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import PlayerInfo from "../components/SinglePlayer.tsx";
import { StrippedPlayersRouteType } from "../types/minecraftApi.ts";

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
				<PlayerInfo data={player} key={player.displayName} />
			))}
		</ul>
	);
};

export default PlayersInfo;
