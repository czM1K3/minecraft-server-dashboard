import { FunctionalComponent } from "preact";
import Layout from "./Layout.tsx";

const Error: FunctionalComponent = () => {
	return (
		<Layout>
			<div
				className="justify-content-center align-items-center d-flex vh-100 flex-column"
				style={{
					height: "max-content",
				}}
			>
				<h1 className="text-white">Something went wrong</h1>
			</div>
		</Layout>
	);
};

export default Error;
