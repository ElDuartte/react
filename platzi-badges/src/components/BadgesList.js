import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
	render() {
		return (
			<li key={this.props.badge.id} className="badgeList badgesContainer">
				<img
					className="BadgesListItem__avatar"
					src={this.props.badge.avatarUrl}
					alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
				/>

				<div className="textBadges">
					<h3 className="nameBadges">
						{this.props.badge.firstName} {this.props.badge.lastName}
					</h3>
					<p className="infoBadges">
						<br />
						{this.props.badge.jobTitle}
					</p>
					<p className="socialBadges">@{this.props.badge.twitter}</p>
				</div>
			</li>
		);
	}
}

class BadgesList extends React.Component {
	render() {
		if (this.props.badges.length === 0) {
			return (
				<div>
					<h3>No badges were found</h3>
					<Link className="btn btn-primary" to="/Badges/new">
						Create new badge
					</Link>
				</div>
			);
		}

		return (
			<div className="BadgesList">
				<ul className="list-unstyled">
					{this.props.badges.map((badge) => {
						return (
							<li key={badge.id}>
								<BadgesListItem badge={badge} />
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default BadgesList;
