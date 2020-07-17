import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

export default function HeaderEnterprise({ returnClick }) {
	return (
		<div className='fw-page-builder-content'>
			<Row className='align-items-center'>
				<Col xs='12'>
					<div id='content-background' className='home-content'>
						<div className='start-page-full-width'>
							<div className='inner-content'>
								<div className='hp-text-block'>
									<h2 className='hp-main-title'>ILIAD x FREE</h2>

									<p>
										Le 18 février 1999, Xavier Niel lance{" "}
										<a href='https://free.fr' target='_blank' rel='noopener noreferrer'>
											Free
										</a>
										, une entreprise filiale du groupe Iliad. Il s'agit d'un opérateur de téléphonie
										mobile français et l'un des principaux fournisseurs d'accès à Internet en France
										avec près de 13.5 millions d'abonnés et un chiffre d'affaire en 2019.
									</p>
									<p>
										Mon alternance s'est déroulée au sein de Free Distribution qui est une entité du
										groupe Iliad, au même titre que Free ou Free Mobile.
									</p>

									<div className='hp-buttons'>
										<a href='/#' className='btn btn-primary' onClick={() => returnClick()}>
											En savoir plus sur le groupe Iliad
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
