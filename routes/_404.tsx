import type { FunctionalComponent } from "preact";
import Layout from "../components/Layout.tsx";

const Home: FunctionalComponent = () => {
	return (
		<Layout>
			<div
				className="justify-content-center align-items-center d-flex vh-100 flex-column"
				style={{
					height: "max-content",
				}}
			>
				<h1 className="text-white fw-bold">Not found</h1>
			</div>
		</Layout>
	);
};

export default Home;
