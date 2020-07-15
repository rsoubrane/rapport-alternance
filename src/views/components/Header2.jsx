import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Assets
import Picture from "../../assets/img/profile/romain.jpg";

export default function Header2() {
	return (
		<section className='fw-main-row'>
			<div className='fw-container'>
				<Row>
					<Col xs='12' sm='12'>
						<div id='col_inner_id-5efb526b036ba' class='fw-col-inner' data-paddings='0px 0px 0px 0px'>
							<div id='content-title' class='home-content third-style'>
								<div class='start-page-full-width'>
									<Row className='flex-direction-reverse'>
										<Col sm='12' md='8'>
											<div class='inner-content inner-text-block inner-text-block-2'>
												<div class='hp-text-block'>
													<h2 className='hp-main-title'>Romain</h2>

													<p>
														Passioné de digital, je suis un développeur web spécialisé en
														React et Node. Dans le cadre de ma formation a l'
														<a href='https://ecole-du-digital.com' target='_blank'>
															ESD
														</a>
														, j'ai effectué une année en tant que développeur chez Free.
														Laissez-moi vous résumer mon expérience !
													</p>

													<div className='hp-buttons'>
														<a href='#' className='btn btn-primary'>
															En savoir plus
														</a>
													</div>
												</div>
											</div>
										</Col>
										<Col sm='12' md='4'>
											<div className='inner-content'>
												<img src={Picture} className='fill-block w-100' />
											</div>
										</Col>
									</Row>
								</div>
							</div>

							<div class='fw-divider-space' style={{ paddingTop: "50px" }}></div>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
}
