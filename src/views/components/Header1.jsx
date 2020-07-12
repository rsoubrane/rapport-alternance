import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Assets
import Picture from "../../assets/img/profile.jpg";

export default function Header1() {
	return (
		<section className='fw-main-row'>
			<div className='fw-container'>
				<Row>
					<Col xs='12' sm='12'>
						<div id='col_inner_id-5efba767726eb' className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
							<div id='home_content_7665f8419b51579496e14fe7d99b366e' className='home-content with-photo'>
								<div className='row flex-v-align'>
									<div className='col-sm-12 col-md-7 col-lg-7'>
										<div
											className='home-bgphoto'
											data-videomp='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/mp4_video.mp4'
											data-videowebm='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/webm_video.webm'
											data-img='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/fallback.jpg'
											style={{ position: "relative", zIndex: 1 }}>
											<div
												className='imgbg-container'
												style={{
													backgroundImage:
														'url("//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/fallback.jpg")',
												}}>
												<video
													autoplay=''
													loop=''
													playsinline=''
													style={{
														width: "460px",
														height: "auto",
														opacity: 1,
													}}>
													<source
														src='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/mp4_video.mp4'
														type='video/mp4'
													/>
													<source
														src='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/webm_video.webm'
														type='video/webm'
													/>
												</video>
												<div className='imgbg-overlay'></div>
											</div>
										</div>
									</div>
									<div className='col-sm-12 col-md-5 col-lg-5'>
										<div className='home-text hv-left'>
											<div className='owl-carousel text-rotation owl-loaded owl-drag'>
												<div className='owl-stage-outer'>
													<div
														className='owl-stage'
														style={{
															transform: "translate3d(-672px, 0px, 0px)",
															transition: "all 0s ease 0s",
															width: "2016px;",
														}}>
														<div
															className='owl-item cloned'
															style={{
																width: "326px",
																marginRight: "10px;",
															}}>
															<div className='item'>
																<h4>Frontend-developer</h4>
															</div>
														</div>
														<div
															className='owl-item cloned'
															style={{
																width: "326px",
																marginRight: "10px;",
															}}>
															<div className='item'>
																<h4>Web Designer</h4>
															</div>
														</div>
														<div
															className='owl-item animated owl-animated-in fadeIn active'
															style={{
																width: "326px",
																marginRight: "10px;",
															}}>
															<div className='item'>
																<h4>Frontend-developer</h4>
															</div>
														</div>
														<div
															className='owl-item animated owl-animated-in fadeIn'
															style={{
																width: "326px",
																marginRight: "10px;",
															}}>
															<div className='item'>
																<h4>Web Designer</h4>
															</div>
														</div>
														<div
															className='owl-item cloned'
															style={{
																width: "326px",
																marginRight: "10px;",
															}}>
															<div className='item'>
																<h4>Frontend-developer</h4>
															</div>
														</div>
														<div
															className='owl-item cloned'
															style={{
																width: "326px",
																marginRight: "10px;",
															}}>
															<div className='item'>
																<h4>Web Designer</h4>
															</div>
														</div>
													</div>
												</div>
												<div className='owl-nav disabled'>
													<div className='owl-prev'>prev</div>
													<div className='owl-next'>next</div>
												</div>
												<div className='owl-dots disabled'></div>
											</div>
											<h1>Alex Smith</h1>
											<p>
												Quisque lorem eros, ultrices commodo tortor ut, cursus venenatis elit.
												Morbi aliquam aliquam malesuada. Pellentesque id mauris porttitor,
												cursus libero sit.
											</p>
											<div className='home-buttons'>
												<a
													href='https://themeforest.net/item/leven-vcard-wordpress-theme/25289671'
													target='_blank'
													className='btn btn-primary'>
													Download CV
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='fw-divider-space' style={{ paddingTop: "50px;" }}></div>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
}
