import React, { useState } from "react";

//Utils
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import DownloadCV from "../../components/DownloadCV";
import Card from "./components/Card";

//Assets
import logoFD from "../../assets/img/free/fd_white.webp";

export default function PageHome({ returnPage }) {
	const [seeMore, setSeeMore] = useState(false);

	return (
		<Row className='pt-page-scaleUpCenter'>
			<Col xs='12' sm='12'>
				<div className='home-content with-photo'>
					<Row className='flex-v-align'>
						<Col xs='12' md='5'>
							<div className='home-text'>
								<h1>Rapport d'Alternance</h1>
								<p>
									Ce site réalisé en React et Sass a pour vocation de faire un retour d'expérience de
									mon année d'alternance chez Free en tant que développeur web !
								</p>
								<p className='mt-3 mt-md-0'>
									Ce sont des technologies que j'ai utilisé de manière qutodienne et je suis ravi de
									pouvoir les mettre à profit du développement de ce site.
								</p>
								<div className='home-buttons'>
									<a
										href='/#'
										onClick={() => setSeeMore(!seeMore)}
										className='btn btn-primary d-none d-md-inline-block'>
										{!seeMore ? "En savoir plus" : "En savoir moins"}
									</a>
									<DownloadCV />
								</div>
							</div>
						</Col>
						<Card seeMore={seeMore} returnPage={returnPage} />
					</Row>

					<Row className='d-md-none mt-5 align-items-center justify-content-center'>
						<Col xs='12'>
							<img src={logoFD} alt='Logo Free' className='logo' />
						</Col>

						<Col xs='12' className='my-3'>
							<div className='details text-center'>
								<FontAwesomeIcon icon={faCalendarAlt} className='mr-2' /> Novembre 2019 - Septembre 2020
								<FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' /> Siège Social - 8 Rue de la
								ville-L'Évêque, 75008 Paris
							</div>
						</Col>

						<Col xs='12' className='text-center'>
							<h3 className='font-italic'> "Il a Free, il a tout compris !" </h3>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
}
