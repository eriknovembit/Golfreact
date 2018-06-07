import React, { Component } from 'react';

export default class CategoryContent extends Component {
	render() {
		return (
			<div className="col-8">
				<h2 className="font-blue">Choose "Swing Faults" category</h2>
				<ul className="category-buttons clearfix">
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/chicken-wing/?t=dashboard">
							Chicken Wing
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/closed-club-face/?t=dashboard">
							Closed Club Face
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/disconnected-move-away/?t=dashboard">
							Disconnected move away
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/early-extension/?t=dashboard">
							early extension
						</a>
					</li>
					<li className="static">
						<a
							className="btn active"
							href="https://dev.meandmygolf.com/vaults/early-release/?t=dashboard">
							early release
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/hanging-back/?t=dashboard">
							hanging back
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/loss-of-posture/?t=dashboard">
							loss of posture
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/open-club-face/?t=dashboard">
							Open Club Face
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/over-swing/?t=dashboard">
							over swing
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/over-the-top/?t=dashboard">
							over the top
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/reverse-spine/?t=dashboard">
							reverse spine
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/slide/?t=dashboard">
							slide
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/sway/?t=dashboard">
							sway
						</a>
					</li>
					<li className="static">
						<a
							className="btn "
							href="https://dev.meandmygolf.com/vaults/under-the-plane/?t=dashboard">
							under the plane
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
