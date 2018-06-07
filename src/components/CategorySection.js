import React, { Component } from 'react';
import CategoryContent from './CategoryContent';
import Banner from './Banner';

export default class CategorySection extends Component {
	render() {
		return (
			<section
				className="section-box section-top"
				style={{ paddingLeft: '155px' }}>
				<div className="container">
					<div className="row">
						<CategoryContent />
						<Banner />
					</div>
				</div>
			</section>
		);
	}
}
