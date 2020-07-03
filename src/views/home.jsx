import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

const downloadCV = () => {
	console.log("Download");
};

export default function PageHome({ returnPage }) {
	return (
		<Row>
			<Col xs='12' sm='12'>
				<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
					<div id='profile-picture' className='home-content'>
						<Row className='flex-v-align flex-direction-reverse'>
							<Col sm='12' md='6' lg='6'>
								<div className='home-photo'>
									<div
										className='hp-inner'
										style={{
											backgroundPosition: "calc(50% + -9.77913px) calc(50% + 3.67075px);",
										}}></div>
								</div>
							</Col>

							<Col sm='12' md='6' lg='6'>
								<div className='home-text'>
									<h1>Rapport Alternance</h1>
									<p>
										Ce site a pour vocation de faire un retour d'expérience de de mon année
										d'alternance chez Free ainsi que de vous présenter mon parcours !
									</p>
									<div className='home-buttons'>
										<a href='#' onClick={() => returnPage(2)} className='btn btn-primary'>
											Voir le résumé
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
