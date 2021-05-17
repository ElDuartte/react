import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import avatar from "../images/avatar.png";

class Badge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge_header">
					<img src={confLogo} alt="Logo de la conferencia" />
				</div>
				<div className="Badge_section-name">
					<img className="Badge_avatar" src={avatar} alt="Avatar" />
					<h1>
						Juan Felipe <br /> Duarte
					</h1>
				</div>
				<div className="Badge_section-info">
					<h3>Frontend Engineer</h3>
					<div>@twitter</div>
				</div>
				<div className="Badge_footer"> #platziconf </div>
			</div>
		);
	}
}

export default Badge;
