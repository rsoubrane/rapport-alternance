import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

export default function HeaderMissions() {
	return (
		<div className='fw-page-builder-content'>
			<Row className='align-items-center'>
				<Col xs='12'>
					<div id='content-background' className='home-content'>
						<div className='start-page-full-width'>
							<div className='inner-content'>
								<div className='hp-text-block'>
									<h2 className='hp-main-title'>Missions</h2>

									<p className='text-justify'>
										J'ai eu l'occasion de travailler sur plusieurs projets radicalement différents
										durant cette année d'alternance. Laissez moi vous parler de ceux ci !
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
