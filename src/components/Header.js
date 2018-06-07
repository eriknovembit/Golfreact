import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<header className="header bg-blue">
				<div className="title-container" />

				<div className="settings-container">
					<ul className="header-menu">
						<li className="notifications ">
							<a href="#" className="notifications-link">
								<i className="icon icon-file5" />
							</a>

							<ul className="sub-menu popover notification-box scroll-content">
								<li>
									<a
										href="https://dev.meandmygolf.com/narrow-your-stance-to-draw-the-ball/?t=dashboard"
										className="clearfix">
										<div className="notification-box-img alignleft">
											<img
												src="https://secure.gravatar.com/avatar/6748d2ffc9c0ccc4dab6f37902ce9ffc?s=96&amp;d=mm&amp;r=g"
												alt="Piers Ward"
											/>
										</div>
										<div className="notification-box-info">
											<span className="author">Piers Ward</span>
											<span className="post">
												{' '}
												posted new blog article titled{' '}
											</span>
											<span className="title">
												"Narrow Your Stance To Draw The Ball"
											</span>
										</div>
									</a>
								</li>
								<li>
									<a
										href="https://dev.meandmygolf.com/the-biggest-reason-for-golfers-3-putting/?t=dashboard"
										className="clearfix">
										<div className="notification-box-img alignleft">
											<img
												src="https://secure.gravatar.com/avatar/6748d2ffc9c0ccc4dab6f37902ce9ffc?s=96&amp;d=mm&amp;r=g"
												alt="Piers Ward"
											/>
										</div>
										<div className="notification-box-info">
											<span className="author">Piers Ward</span>
											<span className="post">
												{' '}
												posted new blog article titled{' '}
											</span>
											<span className="title">
												"The Biggest Reason For Golfers 3 Putting"
											</span>
										</div>
									</a>
								</li>
								<li>
									<a
										href="https://dev.meandmygolf.com/plug-yourself-in-for-more-power-in-your-golf-swing/?t=dashboard"
										className="clearfix">
										<div className="notification-box-img alignleft">
											<img
												src="https://secure.gravatar.com/avatar/1245cc4bee2faaa91685e353f5f6edfa?s=96&amp;d=mm&amp;r=g"
												alt="Andy Proudman"
											/>
										</div>
										<div className="notification-box-info">
											<span className="author">Andy Proudman</span>
											<span className="post">
												{' '}
												posted new blog article titled{' '}
											</span>
											<span className="title">
												"For More Power In Your Golf Swing - Plug Yourself In"
											</span>
										</div>
									</a>
								</li>
								<li>
									<a
										href="https://dev.meandmygolf.com/stop-back-pain-and-inconsistency-in-the-golf-swing/?t=dashboard"
										className="clearfix">
										<div className="notification-box-img alignleft">
											<img
												src="https://secure.gravatar.com/avatar/6748d2ffc9c0ccc4dab6f37902ce9ffc?s=96&amp;d=mm&amp;r=g"
												alt="Piers Ward"
											/>
										</div>
										<div className="notification-box-info">
											<span className="author">Piers Ward</span>
											<span className="post">
												{' '}
												posted new blog article titled{' '}
											</span>
											<span className="title">
												"Stop Back Pain And Inconsistency In The Golf Swing"
											</span>
										</div>
									</a>
								</li>
								<li>
									<a
										href="https://dev.meandmygolf.com/pitch-like-golf-legend-seve-ballesteros/?t=dashboard"
										className="clearfix">
										<div className="notification-box-img alignleft">
											<img
												src="https://secure.gravatar.com/avatar/1245cc4bee2faaa91685e353f5f6edfa?s=96&amp;d=mm&amp;r=g"
												alt="Andy Proudman"
											/>
										</div>
										<div className="notification-box-info">
											<span className="author">Andy Proudman</span>
											<span className="post">
												{' '}
												posted new blog article titled{' '}
											</span>
											<span className="title">
												"Pitch Like Golf Legend Seve Ballesteros"
											</span>
										</div>
									</a>
								</li>
								<li>
									<a
										href="https://dev.meandmygolf.com/mastering-fast-greens/?t=dashboard"
										className="clearfix">
										<div className="notification-box-img alignleft">
											<img
												src="https://secure.gravatar.com/avatar/6748d2ffc9c0ccc4dab6f37902ce9ffc?s=96&amp;d=mm&amp;r=g"
												alt="Piers Ward"
											/>
										</div>
										<div className="notification-box-info">
											<span className="author">Piers Ward</span>
											<span className="post">
												{' '}
												posted new blog article titled{' '}
											</span>
											<span className="title">"“Mastering” fast greens."</span>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li className="has-sub-menu">
							<a href="#">
								<div
									className="avatar-container"
									style={{
										backgroundImage: `url(
											https://graph.facebook.com/10216192346189825/picture?type=large
										)`
									}}
								/>
								<div className="name-container">
									<div className="welcome">WELCOME </div>
									<div className="name">Neil </div>
								</div>
								<i className="icon icon-chevron-down" />
							</a>
							<ul className="sub-menu popover">
								<li>
									<a href="https://dev.meandmygolf.com/dashboard-account/?t=dashboard">
										<i className="icon icon-user6" />My Account{' '}
									</a>
								</li>

								<li>
									<a href="https://dev.meandmygolf.com/wp-login.php?action=logout&amp;redirect_to=https%3A%2F%2Fdev.meandmygolf.com&amp;_wpnonce=c65f243341">
										<i className="icon icon-sign-out" />Log Out{' '}
									</a>
								</li>
							</ul>
						</li>
						<li className="has-sub-menu">
							<a href="#">
								<span className="question-mark">?</span>
							</a>
							<ul className="sub-menu popover">
								<li>
									<a href="#watch-video" className="open-right-bar">
										<i className="icon icon-camera2" />Watch Video
									</a>
								</li>
								<li>
									<a href="#contact-form" className="open-right-bar">
										<i className="icon icon-question" />Contact us
									</a>
								</li>
								<li>
									<a href="#site-review" className="pop-up">
										<i className="icon icon-pencil" />Write review
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="search-container">
					<div className="header-search-form">
						<div className="search">
							<form
								method="get"
								className="search-form clearfix"
								action="https://dev.meandmygolf.com/search/?t=dashboard">
								<input type="hidden" name="t" value="dashboard" />
								<div className="ui-front">
									<input
										type="text"
										className="field"
										name="keyword"
										id="mmg_search"
										autoComplete="off"
										placeholder="Keyword Search"
										value=""
									/>
								</div>
								<img
									src="https://dev.meandmygolf.com/wp-content/themes/mmg/assets/images/loader.gif"
									className="search-loader"
								/>
								<input type="submit" name="submit" value="" />
								<i name="icon icon-search3" />
							</form>
						</div>
					</div>
				</div>

				<div id="site-review" className="mfp-hide popup-wrap popup-review">
					<h2>Add a review</h2>
					<div className="rate">
						<div className="site-rating" data-rating="5" />
						<span>your rating</span>
					</div>
					<form>
						<input type="hidden" id="site-rating" value="5" />
						<textarea
							required
							id="comment"
							placeholder="Enter your comment here"
						/>
						<input
							type="submit"
							className="btn btn-primary bg-green"
							value="Add"
							data-txt-updated="Update"
						/>
					</form>
					<div id="review_response" />
				</div>
			</header>
		);
	}
}
