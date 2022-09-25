import { FunctionalComponent } from "preact";

const Layout: FunctionalComponent = ({ children }) => {
	return (
		<>
			<head>
				<title>Minecraft</title>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css"
					rel="stylesheet"
				/>
			</head>
			<main>
				<div
					className="bg-image vh-100"
					style={{
						backgroundImage: "url('/background.webp')",
					}}
				>
					{children}
				</div>
			</main>
			<footer>
				<script
					type="text/javascript"
					src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"
				></script>
			</footer>
		</>
	);
};

export default Layout;
