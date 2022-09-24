import { FunctionalComponent } from "preact";
import Layout from "./Layout.tsx";

const Error: FunctionalComponent = () => {
	return (
		<Layout>
			<div>
				<h1>Something went wrong</h1>
			</div>
		</Layout>
	)
};

export default Error;
