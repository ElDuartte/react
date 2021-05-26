import React from "react";
import avatar from "../images/avatar.png";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
	render() {
		return (
			<ul className="list-unstyled">
				{this.props.badges.map((badge) => {
					return (
						<li key={badge.id} className="badgeList badgesContainer">
							<img className="avatarBadges" src={avatar} alt="avatar" />
							<div className="textBadges">
								<h3 className="nameBadges">
									{badge.firstName}
									{badge.lastName}
									<br />
								</h3>
								<p className="infoBadges">
									{badge.email}
									<br />
									{badge.jobTitle}
									<br />
								</p>
								<p className="socialBadges">@{badge.twitter}</p>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default BadgesList;
