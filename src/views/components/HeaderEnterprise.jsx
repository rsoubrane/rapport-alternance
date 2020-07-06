import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

export default function HeaderEnterprise({ returnClick }) {
	return (
		<section className='fw-main-row'>
			<div className='fw-container'>
				<Row className='align-items-center'>
					<Col xs='12' sm='12'>
						<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
							<div id='content-background' className='home-content third-style'>
								<div className='start-page-full-width'>
									<Row className='flex-direction-reverse'>
										<Col sm='12'>
											<div className='inner-content'>
												<div className='hp-text-block'>
													<h2 className='hp-main-title'>ILIAD x FREE</h2>

													<p>
														Le 18 février 1999, Xavier Niel lance{" "}
														<a href='https://free.fr' target='_blank'>
															Free
														</a>
														, une entreprise filiale du groupe Iliad. Il s'agit d'un
														opérateur de téléphonie mobile français et l'un des principaux
														fournisseurs d'accès à Internet en France avec près de 13.5
														millions d'abonnés et un chiffre d'affaire en 2019.
													</p>
													<p>
														Mon alternance s'est déroulée au sein de Free Distribution qui
														est une entité de l'UES Iliad, au même titre que Free ou Free
														Mobile.
													</p>

													<div className='hp-buttons'>
														<a
															href='#'
															className='btn btn-primary'
															onClick={() => returnClick()}>
															En savoir plus sur l'UES Iliad
														</a>
													</div>
												</div>
											</div>
										</Col>
									</Row>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
}
