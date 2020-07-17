import React, { useState } from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import DownloadCV from "../../components/DownloadCV";
import Card from "./components/Card";

export default function PageHome({ returnPage }) {
	const [seeMore, setSeeMore] = useState(false);

	return (
		<Row className='pt-page-scaleUpCenter'>
			<Col xs='12' sm='12'>
				<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
					<div className='home-content with-photo'>
						<Row className='flex-v-align flex-direction-reverse'>
							<Card seeMore={seeMore} returnPage={returnPage} />
							<Col xs='12' md='5'>
								<div className='home-text'>
									<h1>Rapport d'Alternance</h1>
									<p>
										Ce site réalisé en React et Sass a pour vocation de faire un retour d'expérience
										de mon année d'alternance chez Free en tant que développeur web !
									</p>
									<p className='mt-3 mt-md-0'>
										Ce sont des technologies que j'ai utilisé de manière qutodienne et je suis ravi
										de pouvoir les mettre à profit du développement de ce site.
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
						</Row>
					</div>
				</div>
			</Col>
		</Row>
	);
}
