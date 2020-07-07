import React, { useState } from "react";

//Reactstrap Components
import { Row, Col, ButtonGroup, Button } from "reactstrap";

//Data
import { KeyFiguresEnterprise, TimelineEnterprise } from "../../variables";

//Components
import HeaderEnterprise from "../components/HeaderEnterprise";
import Objectives from "../components/Objectives";
import Timeline from "../components/Timeline";
import Position from "../components/Position";
import Details from "../components/Details";
import KeyPoints from "../components/KeyPoints";

export default function PageEnterprise() {
	const [currentTab, setCurrentTab] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const switchTab = () => {
		switch (currentTab) {
			case 1:
				return <KeyPoints title='Chiffres clés' data={KeyFiguresEnterprise} />;
			case 2:
				return <Timeline title='Dates importantes de Free' data={TimelineEnterprise} />;
			case 3:
				return <Objectives />;
			case 4:
				return <Position />;
			default:
				return null;
		}
	};

	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<Details isOpen={isModalOpen} closeModal={handleModal} />

			<article className='page type-page'>
				<div className='entry-content'>
					<div className='fw-page-builder-content'>
						<HeaderEnterprise returnClick={handleModal} />
						<Row className='justify-content-center d-none d-md-block text-center'>
							<ButtonGroup className='sub_menu'>
								<Button
									size='lg'
									color={currentTab === 1 ? "primary" : "secondary"}
									onClick={() => setCurrentTab(1)}
									className='switch-button'>
									Chiffre clés
								</Button>
								<Button
									size='lg'
									color={currentTab === 2 ? "primary" : "secondary"}
									onClick={() => setCurrentTab(2)}
									className='switch-button'>
									Grandes dates
								</Button>
								<Button
									size='lg'
									color={currentTab === 3 ? "primary" : "secondary"}
									onClick={() => setCurrentTab(3)}
									className='switch-button'>
									Objectifs stratégique
								</Button>
								<Button
									size='lg'
									color={currentTab === 4 ? "primary" : "secondary"}
									onClick={() => setCurrentTab(4)}
									className='switch-button'>
									Positionnement
								</Button>
							</ButtonGroup>
						</Row>
						<Row className='d-none d-md-block'>{switchTab()}</Row>

						<Row className='d-md-none'>
							<KeyPoints title='Chiffres clés' data={KeyFiguresEnterprise} />
							<Timeline title='Dates importantes de Free' data={TimelineEnterprise} /> <Objectives />
							<Position />
						</Row>
					</div>
				</div>
			</article>
		</>
	);
}
