import type { FunctionalComponent } from "preact";

type GamemodeProps = {
	mode: string;
};

const Gamemode: FunctionalComponent<GamemodeProps> = ({ mode }) => {
	switch (mode) {
		case "CREATIVE":
			return (
				<img
					src="/assets/goldenapple.webp"
					style={{ width: "50px" }}
					title="Player is in creative mode"
				/>
			);
		case "SPECTATOR":
			return (
				<img
					src="/assets/spyglass.webp"
					style={{ width: "50px" }}
					title="Player is in specator mode"
				/>
			);
		default:
			return <></>;
	}
};

export default Gamemode;
