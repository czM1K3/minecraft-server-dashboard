import type { FunctionalComponent } from "preact";

type WorldTypeProps = {
	type: string;
};

const styles = { width: "50px" };

const WorldType: FunctionalComponent<WorldTypeProps> = ({ type }) => {
	switch (type) {
		case "NETHER":
			return (
				<img
					src="/assets/netherrack.webp"
					style={styles}
					title="Player is in the nether"
				/>
			);
		case "THE_END":
			return (
				<img
					src="/assets/endstone.webp"
					style={styles}
					title="Player is in the end"
				/>
			);
		default:
			return (
				<img
					src="/assets/grassblock.webp"
					style={styles}
					title="Player is in overworld"
				/>
			);
	}
};

export default WorldType;
