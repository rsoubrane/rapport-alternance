import React, { useState } from "react";

//Reactstrap Components
import { Row, Col, Container } from "reactstrap";

//Assets
import logoFree from "../../assets/img/Logo Free.png";
import logoFD from "../../assets/img/free/fd_white.png";
import Pym from "../../assets/img/projects/pym.png";
import TheMask from "../../assets/img/projects/the_mask.png";

const downloadCV = () => {
	console.log("Download");
};

export default function PageHome({ returnPage }) {
	const [seeMore, setSeeMore] = useState(false);

	return (
		<Row>
			<Col xs='12' sm='12'>
				<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
					<div className='home-content with-photo'>
						<Row className='flex-v-align flex-direction-reverse'>
							<Col sm='7' className='d-none d-md-block'>
								<div className='card-container'>
									<Container fluid className={`${seeMore ? "hover" : ""}`}>
										<div className='card'>
											<div className='front'>
												<div className='top'>
													<div className='logo'>
														<img src={logoFD} alt='Logo FD' />
													</div>
												</div>
												<div className='bottom'>
													<div className='content'>
														<div className='name'>Romain Soubrane</div>
														<div className='introduction'>Développeur Web</div>
													</div>
												</div>
											</div>
											<div className='back'>
												<Row className='top-row'>
													<img src={logoFD} alt='Logo Free' className='logo' />
													<a href='https://free.fr' target='_noblank'>
														<i className='fas fa-globe-europe'></i>
													</a>
												</Row>

												<Row className='middle-row'>
													<h3> "Il a Free, il a tout compris !" </h3>
												</Row>

												<Row className='bottom-row'>
													<div className='details'>
														<div>
															<span className='fa fa-calendar-alt'></span>
															Novembre 2019 - Septembre 2020
														</div>
														<div>
															<span className='fa fa-map-marker-alt'></span>
															Siège Social - 8 Rue de la ville-L'Évêque, 75008 Paris
														</div>
														<div>
															<span className='fa fa-briefcase'></span>
															<div className='missions d-inline-flex'>
																<a href='#' onClick={() => returnPage(4)}>
																	<img src={Pym} alt='Pym' />
																</a>
																<a href='#' onClick={() => returnPage(4)}>
																	<img src={TheMask} alt='TheMask' />
																</a>
																<a href='#' onClick={() => returnPage(4)}>
																	Jarvis
																</a>
															</div>
														</div>
													</div>
												</Row>
											</div>
										</div>
									</Container>
								</div>
							</Col>
							<Col xs='12' className='my-3 d-md-none'>
								<img src={logoFD} alt='Logo FD' />
							</Col>
							<Col xs='12' md='5'>
								<div className='home-text'>
									<h1>Rapport d'Alternance</h1>
									<p>
										Ce site réalisé en React et Sass a pour vocation de faire un retour d'expérience
										de mon année d'alternance chez Free en tant que développeur web !
									</p>
									<p className='mt-3 mt-md-0'>
										Ce sont des technologies que j'ai utilisé de manière qutodienne et je suis ravi
										de pouvoir les mettre à profit du développement de ce site.
									</p>
									<div className='home-buttons'>
										<a
											href='#'
											onClick={() => setSeeMore(!seeMore)}
											className='btn btn-primary d-none d-md-inline-block'>
											{!seeMore ? "En savoir plus" : "En savoir moins"}
										</a>
										<a href='#' onClick={() => downloadCV()} className='btn btn-primary'>
											Télécharger mon CV
										</a>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Col>
		</Row>
	);
}

{
	/* <Row>
			<Col xs='12' sm='12'>
				<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
					<div id='home_content_389dca2021be1de74f6007502997009f' className='home-content with-photo'>
						<div className='row flex-v-align flex-direction-reverse'>
							<div className='col-sm-12 col-md-7 col-lg-7'>
								<div className='home-bgphoto' style={{ position: "relative", zIndex: 1 }}>
									<div
										className='imgbg-container'
										style={{
											backgroundImage:
												"url(&quot;//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/fallback.jpg&quot;);",
										}}>
										<img src={Free} />
										<div className='imgbg-overlay'></div>
									</div>
								</div>
							</div>
							<div className='col-sm-12 col-md-5 col-lg-5'>
								<div className='home-text'>
									<h1>Independent UI/UX Designer</h1>
									<p>
										Quisque lorem eros, ultrices commodo tortor ut, cursus venenatis elit. Morbi
										aliquam aliquam malesuada. Pellentesque id mauris porttitor, cursus libero sit.
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
				</div>
			</Col>
		</Row> */
}
