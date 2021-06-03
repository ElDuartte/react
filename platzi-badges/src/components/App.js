import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout.js";
import Badges from "../pages/Badges.js";
import BadgeNew from "../pages/BadgeNew.js";
import NotFound from "./NotFound.js";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
