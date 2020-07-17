import React from "react";

//Utils
import Zoom from "react-reveal/Zoom";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";

//Assets
import Dev from "../../../assets/img/illustrations/it_support.svg";

export default function Technologies({ title, data }) {
	const returnDelay = (delay) => {
		return parseInt(100 * delay);
	};

	return (
		<>
			<BlockTitle title={title} />

			<Row className='align-items-center justify-content-center mb-5'>
				<Col xs='12' md='4' className='d-flex align-items-stretch text-center'>
					<img src={Dev} className='img-fluid-75' alt='Code' />
				</Col>
				<Col xs='12' md='6' className='d-flex align-items-stretch mt-3 mt-md-0'>
					<p className='text-justify'>
						Bien que je ne sois autorisé à parler plus en détail (ou à montrer plus de visuels) des projets
						sur lesquels j'ai pu travailler pour des raisons de confidentialité, je peux tout de même
						présenter les technologies que j'ai eu l'occasion d'utiliser tout au long de l'année !<br />
						<br />
						Ce sont uniquement des technologies Front-End. C'est à dire qu'elles permettent de mettre en
						place les outils et de les rendre attractifs tout en communiquant avec le Back-end via des APIs.
					</p>
				</Col>
			</Row>

			<Row className='technologies'>
				{data
					? data.map((technology) => {
							return (
								<Col xs='12' md='4' className='d-flex align-items-stretch mb-3' key={technology.id}>
									<Zoom delay={returnDelay(technology.id)}>
										<div className='icon-box'>
											<div className='icon'>
												<img
													src={technology.img}
													className='img-fluid'
													alt={technology.title}
												/>
											</div>
											<h4 className='title'>
												<a href={technology.site}>{technology.title}</a>
											</h4>
											<p className='description'>{technology.description}</p>
										</div>
									</Zoom>
								</Col>
							);
					  })
					: null}
			</Row>
		</>
	);
}
