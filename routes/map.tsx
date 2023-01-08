import { FunctionalComponent } from "preact";
import Layout from "../components/Layout.tsx";

const mapAddress = Deno.env.get("MAP_ADDRESS") ?? "http://localhost:8100";

const Home: FunctionalComponent = () => {
	return (
		<Layout>
			<a
				href="/"
				className="btn btn-primary btn-rounded"
				style={{
					position: "fixed",
					zIndex: 100,
					top: "6px",
					left: "150px",
				}}
			>
				Back
			</a>
			<iframe
				src={mapAddress}
				style={{
					position: "fixed",
					width: "100vw",
					height: "100vh",
				}}
			/>
		</Layout>
	);
};

export default Home;
