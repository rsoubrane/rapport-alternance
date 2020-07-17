import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

export default function HeaderBilan() {
	return (
		<div className='fw-page-builder-content'>
			<Row className='align-items-center'>
				<Col xs='12'>
					<div id='content-background' className='home-content'>
						<div className='start-page-full-width'>
							<div className='inner-content'>
								<div className='hp-text-block'>
									<h2 className='hp-main-title'>Bilan et perspectives</h2>

									<p className='text-justify'>
										Après plusieurs mois passés au sein du pôle R&D de Free Distribution, il est
										déjà temps pour moi d'en tirer les premières conclusions positives ou négati...
										Pour le coup elle sont toutes positives !
									</p>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
