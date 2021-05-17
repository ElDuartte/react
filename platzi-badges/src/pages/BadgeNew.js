import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar.js";
import Badge from "../components/Badge.js";

class BadgeNew extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo" alt="Logo" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								firstName="Richard"
								lastName="Sastre"
								twitter="pepo"
								jobTitle="Fontend"
							></Badge>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew;
