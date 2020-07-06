import React, { useState } from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Utils
import Rodal from "rodal";

//Assets
import Free from "../../assets/img/Logo Free.png";

const downloadCV = () => {
	console.log("Download");
};

export default function PageHome({ returnPage }) {
	const [seeMore, setSeeMore] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Row>
			<Rodal
				visible={isModalOpen}
				onClose={() => setIsModalOpen(!isModalOpen)}
				animation='flip'
				className='rodal-lg'>
				<div>Content</div>
			</Rodal>

			<Col xs='12' sm='12'>
				<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
					<div id='profile-picture' className='home-content'>
						<Row className='flex-v-align flex-direction-reverse align-items-center'>
							<Col sm='12' md='6' lg='6'>
								{!isModalOpen ? (
									<div className={`home-photo ${seeMore ? ":hover" : ""}`}>
										<div className='hp-inner'>
											<div
												className='hp-front'
												// style={{
												// 	backgroundPosition: "calc(50% + -9.77913px) calc(50% + 3.67075px)",
												// }}
											>
												<img src={Free} />
											</div>
											<div class='hp-back'>
												<h2>Paris</h2>
												<p>What an amazing city</p>
											</div>
										</div>
									</div>
								) : (
									<div class='hp'>
										<div class='hp-inner'>
											<div class='hp-front'>
												<img
													src='https://www.w3schools.com/howto/img_paris.jpg'
													alt='Paris'
													style={{ width: "300px", height: "200px" }}
												/>
											</div>
											<div class='hp-back'>
												<h2>Paris</h2>
												<p>What an amazing city</p>
											</div>
										</div>
									</div>
								)}
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
