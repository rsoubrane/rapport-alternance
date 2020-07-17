import React from "react";

//Utils
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope, faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
										<FontAwesomeIcon icon={faGlobeEurope} />
									</a>
								</Row>

								<Row className='middle-row'>
									<h3> "Il a Free, il a tout compris !" </h3>
								</Row>

								<Row className='bottom-row'>
									<div className='details'>
										<div>
											<FontAwesomeIcon icon={faCalendarAlt} className='mr-2' /> Novembre 2019 -
											Septembre 2020
										</div>
										<div>
											<FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' /> Siège Social - 8
											Rue de la ville-L'Évêque, 75008 Paris
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
		</>
	);
}
