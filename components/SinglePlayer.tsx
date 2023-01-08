import type { FunctionalComponent } from "preact";
import { StrippedPlayerRouteType } from "../types/minecraftApi.ts";
import Bar, { BarType } from "./Bar.tsx";
import Gamemode from "./Gamemode.tsx";
import Op from "./Op.tsx";
import WorldType from "./WorldType.tsx";

type PlayerInfoProps = {
	data: StrippedPlayerRouteType;
};

const PlayerInfo: FunctionalComponent<PlayerInfoProps> = ({ data }) => {
	return (
		<li className="list-group-item text-center">
			<h2>{data.displayName}</h2>
			<Bar count={data.health} type={BarType.hearts} />
			<Bar count={data.hunger} type={BarType.hunger} />
			<WorldType type={data.dimension} />
			{data.op && <Op />}
			<Gamemode mode={data.gamemode} />
		</li>
	);
};

export default PlayerInfo;
