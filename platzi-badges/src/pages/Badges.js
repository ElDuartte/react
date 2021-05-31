import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList.js";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

class Badges extends React.Component {
	constructor(props) {
		super(props);
		console.log("1. constructor()");

		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		console.log("3. componentDidMount()");

		this.timeoutId = setTimeout(() => {
			this.setState({
				data: [
					{
						id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
						firstName: "Freda ",
						lastName: "Grady",
						email: "Leann_Berge@gmail.com",
						jobTitle: "Legacy Brand Director",
						twitter: "FredaGrady22221-7573",
						avatar: { avatar },
					},
					{
						id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
						firstName: "Major ",
						lastName: "Rodriguez",
						email: "Ilene66@hotmail.com",
						jobTitle: "Human Research Architect",
						twitter: "ajorRodriguez61545",
						avatar: { avatar },
					},
					{
						id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
						firstName: "Daphney ",
						lastName: "Torphy",
						email: "Ron61@hotmail.com",
						jobTitle: "National Markets Officer",
						twitter: "DaphneyTorphy96105",
						avatar: { avatar },
					},
				],
			});
		}, 3000);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("5. render()");
		console.log({ prevProps: prevProps, prevState: prevState });
		console.log({
			props: this.props,
			state: this.state,
		});
	}

	componentWillUnmount() {
		console.log("6. componentWillUnmount");
		clearTimeout(this.timeoutId);
	}

	render() {
		console.log("2/4. render()");
		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img
								className="Badges_conf-logo"
								src={confLogo}
								alt="Conf logo"
							/>
						</div>
					</div>
				</div>

				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>

					<BadgesList badges={this.state.data} />
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
