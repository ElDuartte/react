import React from "react";

import confLogo from "../images/badge-header.svg";
import avatar from "../images/avatar.png";

class Badge extends React.Component {
	render() {
		return (
			<div>
				<div>
					<img src={confLogo} alt="Logo de la conferencia" />
				</div>
				<div>
					<img src={avatar} alt="Avatar" />
					<h1>
						Juan Felipe <br /> Duarte
					</h1>
				</div>
				<div>
					<p>Frontend Engineer</p>
					<p>@twitter</p>
				</div>
			</div>
		);
	}
}

export default Badge;
