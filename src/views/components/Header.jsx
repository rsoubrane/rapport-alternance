import React from "react";

import Picture from "../../assets/img/profile.jpg";

export default function Header() {
	return (
		<div className='fw-container'>
			<div className='row'>
				<div className='col-xs-12 col-sm-12 '>
					<div id='col_inner_id-5efbc2746ee1c' className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
						<div id='home_content_cc1afe4be543928ea39a628af5774616' className='home-content third-style'>
							<div className='start-page-full-width'>
								<div className='row flex-direction-reverse'>
									<div className='col-sm-12 col-md-6 col-lg-6'>
										<div className='inner-content'>
											<img src={Picture} className='fill-block w-100' />
										</div>
									</div>
									<div className='col-sm-12 col-md-6 col-lg-6'>
										<div className='inner-content text-reverse'>
											<div className='hp-text-block'>
												<h2 className='hp-main-title'>Romain Soubrane</h2>

												<p>
													Passioné de digital, je suis un développeur web spécialisé en React
													et Node. Dans le cadre de ma formation a l'
													<a href='https://ecole-du-digital.com'>ESD</a>, j'ai effectué une
													année en tant que développeur chez Free. Laissez-moi vous résumer
													mon expérience !
												</p>

												<div className='hp-buttons'>
													<a href='#' className='btn btn-primary'>
														En savoir plus
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='fw-divider-space' style={{ paddingTop: "50px" }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
