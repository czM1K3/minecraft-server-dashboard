export const getTimestamp = (seconds: number) => {
	let text = (seconds % 60) + " seconds";
	if (seconds >= 60) {
		text = (Math.floor(seconds / 60) % 60) + " minutes, " + text;
	}
	if (seconds >= 3600) {
		text = (Math.floor(seconds / 3600) % 24) + " hours " + text;
	}
	if (seconds >= 86400) {
		 text = (Math.floor(seconds / 86400)) + " days " + text;
	}
	return text;
};
