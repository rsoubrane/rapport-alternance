import React, { useState } from "react";

//Reactstrap Components
import { Row, Col, ButtonGroup, Button, Container } from "reactstrap";

//Data
import { KeyFiguresFD, TimelineEnterprise, ObjectivesFD } from "../../variables";

//Components
import HeaderMissions from "../components/HeaderMissions";
import Objectives from "../components/Objectives";
import Timeline from "../components/Timeline";
import Position from "../components/Position";
import Details from "../components/Details";
import KeyPoints from "../components/KeyPoints";
import PolesFD from "../components/PolesFD";
import DescriptionFD from "../components/DescriptionFD";

export default function PageMissions() {
	const [currentTab, setCurrentTab] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const switchTab = () => {
		switch (currentTab) {
			case 1:
				return <DescriptionFD />;
			case 2:
				return <KeyPoints title='Chiffres clés' data={KeyFiguresFD} />;
			case 3:
				return <PolesFD />;
			case 4:
				return <Objectives title='Objectifs et valeurs' data={ObjectivesFD} />;
			default:
				return null;
		}
	};

	const handleTabHeader = (returned) => {
		setCurrentTab(returned);
	};

	return (
		<>
			{/* <Details isOpen={isModalOpen} closeModal={handleModal} /> */}

			<article className='page type-page'>
				<div className='entry-content'>
					<div className='fw-page-builder-content'>
						<Row className=''>
							<HeaderMissions currentTab={currentTab} returnClick={handleTabHeader} />
							<Col xs='12' sm='6' className='pl-md-5' style={{ background: "#333" }}>
								{switchTab()}
							</Col>
						</Row>

						<p>
							J'ai pris part au développement majoritairement front de 3 projets : Pym, The Mask et
							Jarvis.
						</p>
					</div>
				</div>
			</article>
		</>
	);
}
