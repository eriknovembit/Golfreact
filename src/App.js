import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/Menu';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import VideoSection from './components/VideoSection';
import './assets/fonts/fonts.css';
import './assets/fonts/icon-fonts/style.css';
import './assets/css/common-style.css';
import './assets/front-components/magnific-popup-master/magnific-popup.css';
import './assets/css/common-dashboard-mobile.css';
import './assets/css/style.css';
import './style.css';
class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				<Header />
				<div className="main-wrap " />
				<CategorySection />
				<VideoSection />
			</div>
		);
	}
}

export default App;
