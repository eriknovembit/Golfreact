import React, { Component } from 'react';

export default class Menu extends Component {
	render() {
		return (
			<aside className="side-menu">
				<h1 className="logo">
					<a href="https://dev.meandmygolf.com/dashboard/?t=dashboard">
						<img
							src="https://dev.meandmygolf.com/wp-content/themes/mmg/assets/images/logo_dashboard.svg"
							alt=""
						/>
					</a>
				</h1>

				<ul className="main-menu">
					<li>
						<a
							href="https://dev.meandmygolf.com/dashboard/?t=dashboard"
							className="">
							<i className="icon icon-home4" />
							Home{' '}
						</a>
					</li>
					<li>
						<a
							href="https://dev.meandmygolf.com/product-category/coaching-plans/?t=dashboard"
							className="">
							<i className="icon icon-coaching" />
							Coaching Plans{' '}
						</a>
					</li>
					<li className="has-sub-menu " id="fix-my-shot">
						<a
							href="https://dev.meandmygolf.com/fix-my-show-help-video/?t=dashboard"
							className=" ">
							<i className="icon icon-fixmyshot" />
							SHOT FIXER{' '}
						</a>
						<div className="sub-menu">
							<div className="clearfix">
								<a className="close-menu alignright">
									<i className="icon icon-chevron-left" />
								</a>
							</div>
							<h3 className="font-blue">CHOOSE CATEGORY</h3>
							<ul>
								<li className="clearfix shot-fixer-parents " data-term-id="467">
									<a
										href="https://dev.meandmygolf.com/fix/faults-and-fixes-fat-thin/?t=dashboard"
										className="alignleft">
										Fat &amp; Thin
									</a>

									<a
										href="https://www.youtube.com/watch?v=lmshF9uKuyg"
										className="alignright popup-iframe">
										<i
											className="icon icon-question2 tooltip"
											title="Help Video"
										/>
									</a>
								</li>

								<li className="clearfix shot-fixer-parents " data-term-id="437">
									<a
										href="https://dev.meandmygolf.com/fix/faults-and-fixes-hook/?t=dashboard"
										className="alignleft">
										Hook
									</a>

									<a
										href="https://www.youtube.com/watch?v=qn5L-9Vul1k"
										className="alignright popup-iframe">
										<i
											className="icon icon-question2 tooltip"
											title="Help Video"
										/>
									</a>
								</li>

								<li className="clearfix shot-fixer-parents " data-term-id="457">
									<a
										href="https://dev.meandmygolf.com/fix/faults-and-fixes-off-center/?t=dashboard"
										className="alignleft">
										Off Center
									</a>

									<a
										href="https://www.youtube.com/watch?v=gElLlSBMmPo"
										className="alignright popup-iframe">
										<i
											className="icon icon-question2 tooltip"
											title="Help Video"
										/>
									</a>
								</li>

								<li className="clearfix shot-fixer-parents " data-term-id="479">
									<a
										href="https://dev.meandmygolf.com/fix/faults-and-fixes/?t=dashboard"
										className="alignleft">
										Pull
									</a>

									<a
										href="https://www.youtube.com/watch?v=wWALOkMxxOg"
										className="alignright popup-iframe">
										<i
											className="icon icon-question2 tooltip"
											title="Help Video"
										/>
									</a>
								</li>

								<li className="clearfix shot-fixer-parents " data-term-id="447">
									<a
										href="https://dev.meandmygolf.com/fix/faults-and-fixes-push/?t=dashboard"
										className="alignleft">
										Push
									</a>

									<a
										href="https://www.youtube.com/watch?v=ye26uxXe89s"
										className="alignright popup-iframe">
										<i
											className="icon icon-question2 tooltip"
											title="Help Video"
										/>
									</a>
								</li>

								<li className="clearfix shot-fixer-parents " data-term-id="425">
									<a
										href="https://dev.meandmygolf.com/fix/faults-and-fixes-slice/?t=dashboard"
										className="alignleft">
										Slice
									</a>

									<a
										href="https://www.youtube.com/watch?v=czjXL6D-VT4"
										className="alignright popup-iframe">
										<i
											className="icon icon-question2 tooltip"
											title="Help Video"
										/>
									</a>
								</li>

								<li className="clearfix shot-fixer-help-parents">
									<a
										href="https://dev.meandmygolf.com/fix-my-show-help-video/?t=dashboard"
										className="alignleft">
										How this works
									</a>
									<a
										href="https://dev.meandmygolf.com/fix-my-show-help-video/?t=dashboard"
										className="alignright">
										<i className="icon icon-question2 font-white" />
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="has-sub-menu" id="video-vault">
						<a href="javascript:void(0)" className="active">
							<i className="icon icon-video-vaults" />
							VIDEO VAULTS{' '}
						</a>
						<div className="sub-menu">
							<div className="clearfix">
								<a className="close-menu alignright">
									<i className="icon icon-chevron-left" />
								</a>
							</div>
							<h3 className="font-blue">CHOOSE CATEGORY</h3>
							<ul>
								<li className="">
									<a href="https://dev.meandmygolf.com/vaults/golf-swing/?t=dashboard">
										Golf Swing
									</a>
								</li>

								<li className="">
									<a href="https://dev.meandmygolf.com/vaults/on-the-course/?t=dashboard">
										On The Course
									</a>
								</li>

								<li className="">
									<a href="https://dev.meandmygolf.com/vaults/performance/?t=dashboard">
										Performance
									</a>
								</li>

								<li className="">
									<a href="https://dev.meandmygolf.com/vaults/short-game/?t=dashboard">
										Short Game
									</a>
								</li>

								<li className="">
									<a href="https://dev.meandmygolf.com/vaults/swing-faults/?t=dashboard">
										Swing Faults
									</a>
								</li>

								<li className="">
									<a href="https://dev.meandmygolf.com/vaults/travel-experiences/?t=dashboard">
										Travel Experiences
									</a>
								</li>

								<li className="">
									<a href="https://dev.meandmygolf.com/vaults/video-series/?t=dashboard">
										Video Series
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="has-sub-menu" id="my-plans">
						<a href="javascript:void(0)" className="">
							<i className="icon icon-plan" />
							MY SAVED VIDEOS{' '}
						</a>
						<div className="sub-menu">
							<div className="clearfix">
								<a className="close-menu alignright">
									<i className="icon icon-chevron-left" />
								</a>
							</div>
							<h3 className="font-blue">SAVED PLAYLISTS</h3>
							<div className="scroll-content">
								<ul id="menu-plans-list">
									<li
										className="plan-list-item editable removable plan-10562 clearfix"
										data-plan-id="10562"
										data-plan-title="Favorites">
										<a
											className="plan-title"
											href="https://dev.meandmygolf.com/plans/?t=dashboard&plan=10562">
											Favorites
										</a>
										<img
											className="menu-plans-star-icon"
											src="https://dev.meandmygolf.com/wp-content/themes/mmg/assets/images/favorited_confirmed_star_icon.png"
										/>
									</li>

									<li
										className="plan-list-item editable removable plan-10574 clearfix"
										data-plan-id="10574"
										data-plan-title="Foot">
										<a
											className="plan-title"
											href="https://dev.meandmygolf.com/plans/?t=dashboard&plan=10574">
											Foot
										</a>
										<a
											className="btn-edit-remove delete delete-plan"
											href="#delete-popup">
											<i className="icon icon-trash-o" />
										</a>
										<a
											className="btn-edit-remove edit edit-plan"
											href="#edit-plan-popup">
											<i className="icon icon-pencil-square-o" />
										</a>
									</li>

									<li
										className="plan-list-item editable removable plan-9857 clearfix"
										data-plan-id="9857"
										data-plan-title="Rename plan">
										<a
											className="plan-title"
											href="https://dev.meandmygolf.com/plans/?t=dashboard&plan=9857">
											Rename plan
										</a>
										<a
											className="btn-edit-remove delete delete-plan"
											href="#delete-popup">
											<i className="icon icon-trash-o" />
										</a>
										<a
											className="btn-edit-remove edit edit-plan"
											href="#edit-plan-popup">
											<i className="icon icon-pencil-square-o" />
										</a>
									</li>

									<li
										className="plan-list-item editable removable plan-9856 clearfix"
										data-plan-id="9856"
										data-plan-title="Fix Slice">
										<a
											className="plan-title"
											href="https://dev.meandmygolf.com/plans/?t=dashboard&plan=9856">
											Fix Slice
										</a>
										<a
											className="btn-edit-remove delete delete-plan"
											href="#delete-popup">
											<i className="icon icon-trash-o" />
										</a>
										<a
											className="btn-edit-remove edit edit-plan"
											href="#edit-plan-popup">
											<i className="icon icon-pencil-square-o" />
										</a>
									</li>

									<li
										className="plan-list-item editable removable plan-3536 clearfix"
										data-plan-id="3536"
										data-plan-title="push">
										<a
											className="plan-title"
											href="https://dev.meandmygolf.com/plans/?t=dashboard&plan=3536">
											push
										</a>
										<a
											className="btn-edit-remove delete delete-plan"
											href="#delete-popup">
											<i className="icon icon-trash-o" />
										</a>
										<a
											className="btn-edit-remove edit edit-plan"
											href="#edit-plan-popup">
											<i className="icon icon-pencil-square-o" />
										</a>
									</li>

									<li
										className="plan-list-item editable removable plan-1887 clearfix"
										data-plan-id="1887"
										data-plan-title="pitching">
										<a
											className="plan-title"
											href="https://dev.meandmygolf.com/plans/?t=dashboard&plan=1887">
											pitching
										</a>
										<a
											className="btn-edit-remove delete delete-plan"
											href="#delete-popup">
											<i className="icon icon-trash-o" />
										</a>
										<a
											className="btn-edit-remove edit edit-plan"
											href="#edit-plan-popup">
											<i className="icon icon-pencil-square-o" />
										</a>
									</li>
									<li className="clearfix create-plan-wrap">
										<a href="#create-plan-popup" className="font-blue pop-up">
											Create new plan
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a
							href="https://dev.meandmygolf.com/articles/?t=dashboard"
							className="">
							<i className="icon icon-articles" />
							Articles{' '}
						</a>
					</li>
					<li className="">
						<a
							href="https://dev.meandmygolf.com/shop/?t=dashboard"
							className="">
							<i className="icon icon-store" />
							Store{' '}
						</a>
					</li>
					<li>
						<a
							href="https://dev.meandmygolf.com/share-and-earn/?t=dashboard"
							className="">
							<i className="icon icon-share" />
							SHARE & EARN{' '}
						</a>
					</li>
				</ul>
			</aside>
		);
	}
}
