import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { StrippedServerRouteType } from "../types/minecraftApi.ts";
import { getTimestamp } from "../utils/timestamp.ts";

type ServerInfoProps = {
	data: StrippedServerRouteType;
};

const ServerInfo: FunctionalComponent<ServerInfoProps> = ({ data }) => {
	const [info, setInfo] = useState(data);

	useEffect(() => {
		const interval = setInterval(() => {
			fetch("/api/server").catch(() => {
				console.error("Failed to fetch");
			}).then(
				async (
					res,
				) => {
					if (res) {
						const data = await res.json();
						setInfo(data);
					}
				},
			);
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<p className="text-white m-0">
				Currently playing: {info.onlinePlayers}/{info.maxPlayers}
			</p>
			<p className="text-white m-0">Version: {info.version}</p>
			<p className="text-white">Uptime: {getTimestamp(info.uptime)}</p>
		</>
	);
};

export default ServerInfo;
