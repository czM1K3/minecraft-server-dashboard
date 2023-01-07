import type { FunctionalComponent } from "preact";
import { StrippedPlayerRouteType } from "../types/minecraftApi.ts";
import Bar, { BarType } from "./Bar.tsx";

type PlayerInfoProps = {
	data: StrippedPlayerRouteType;
}

const PlayerInfo: FunctionalComponent<PlayerInfoProps> = ({ data }) => {
	return (
		<li className="list-group-item text-center" >
			<h2>{data.displayName}</h2>
			<Bar count={data.health} type={BarType.hearts} />
			<Bar count={data.hunger} type={BarType.hunger} />
			<div>Dimension: {data.dimension}</div>
			<div>Role: {data.op ? "Admin" : "Player"}</div>
			{data.gamemode !== "SURVIVAL" && (
				<div>Gamemode: {data.gamemode}</div>
			)}
		</li>
	)
};

export default PlayerInfo;
