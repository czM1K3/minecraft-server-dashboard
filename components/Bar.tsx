import type { FunctionalComponent } from "preact";
import { useMemo } from "preact/hooks";

export enum BarType {
	hunger = "hunger",
	hearts = "heart",
}

type BarProps = {
	count: number;
	type: BarType;
}

const imageProperties = { imageRendering: "pixelated", width: "20px", padding: "1px" };

const Bar: FunctionalComponent<BarProps> = ({ count, type }) => {

	const counts = useMemo(() => {
		const fixedCount = Math.ceil(count);
		return {
			full: Array(Math.floor(fixedCount / 2)).fill(""),
			hasHalf: Boolean(fixedCount % 2),
			empty: Array(Math.floor((20 - fixedCount) / 2)).fill(""),
		};
	}, [count]);

	return (
		<div>
			{counts.full.map((_item, index) => (
				<img src={`/assets/full-${type}.png`} key={index} style={imageProperties} />
			))}
			{counts.hasHalf && (
				<img src={`/assets/half-${type}.png`} style={imageProperties} />
			)}
			{counts.empty.map((_item, index) => (
				<img src={`/assets/no-${type}.png`} key={index} style={imageProperties} />
			))}
		</div>
	);
};

export default Bar;
