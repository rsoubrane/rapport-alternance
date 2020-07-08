import React, { useState } from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Assets
import Free from "../../assets/img/Logo Free.png";

const downloadCV = () => {
	console.log("Download");
};

export default function PageHome({ returnPage }) {
	const [seeMore, setSeeMore] = useState(false);

	return (
		<Row>
			<Col xs='12' sm='12'>
				<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
					<div id='profile-picture' className='home-content'>
						<Row className='flex-v-align flex-direction-reverse align-items-center'>
							<Col sm='12' md='6' lg='6'>
								<div className={`home-photo ${seeMore ? ":hover" : ""}`}>
									<div className='hp-inner'>
										<div className='hp-front'>
											<img src={Free} />
										</div>
										<div class='hp-back'>
											<h2>Paris</h2>
											<p>What an amazing city</p>
										</div>
									</div>
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
										<a href='#' onClick={() => setSeeMore(true)} className='btn btn-primary'>
											En savoir plus
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
