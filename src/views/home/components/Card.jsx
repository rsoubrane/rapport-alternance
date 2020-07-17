import React from "react";

//Reactstrap Components
import { Container, Row, Col } from "reactstrap";

//Assets
import logoFD from "../../../assets/img/free/fd_white.webp";
import Pym from "../../../assets/img/projects/pym.webp";
import TheMask from "../../../assets/img/projects/the_mask.webp";

export default function Card({ seeMore, returnPage }) {
	return (
		<>
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
									<a href='https://free.fr' target='_noblank' aria-label='Free'>
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
											<div className='missions d-inline-flex'>
												<a href='/#' onClick={() => returnPage(4)}>
													<img src={TheMask} alt='TheMask' className='w-100' />
												</a>
												<a href='/#' onClick={() => returnPage(4)}>
													Jarvis
												</a>
												<a href='/#' onClick={() => returnPage(4)}>
													<img src={Pym} alt='Pym' className='w-100' />
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
		</>
	);
}
