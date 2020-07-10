import React, { useState } from "react";

//Reactstrap Components
import { Row, Col, ButtonGroup, Button } from "reactstrap";

//Data
import {
	KeyFiguresEnterprise,
	TimelineEnterprise,
	ObjectivesIliad,
	KeyFiguresFD,
	ObjectivesFD,
	ValuesFD,
} from "../../variables";

//Components
import HeaderEnterprise from "../components/HeaderEnterprise";
import Objectives from "../components/Objectives";
import Timeline from "../components/Timeline";
import Position from "../components/Position";
import Details from "../components/Details";
import KeyPoints from "../components/KeyPoints";
import PolesFD from "../components/PolesFD";
import DescriptionFD from "../components/DescriptionFD";
import Values from "../components/Values";

//Assets
import Xavier from "../../assets/img/free/illu-1.jpg";

export default function PageEnterprise() {
	const [currentTab, setCurrentTab] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [viewMore, setViewMore] = useState(false);

	const switchTab = () => {
		switch (currentTab) {
			case 1:
				return <KeyPoints title='Chiffres clés' data={KeyFiguresEnterprise} />;
			case 2:
				return <Timeline title='Dates importantes de Free' data={TimelineEnterprise} />;
			case 3:
				return <Objectives title='Enjeux et objectifs stratégiques' data={ObjectivesIliad} />;
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
							<Timeline title='Dates importantes de Free' data={TimelineEnterprise} />
							<Objectives title='Enjeux et objectifs stratégiques' data={ObjectivesIliad} />
							<Position />
						</Row>
						{!viewMore ? (
							<Row className='justify-content-center text-center my-4'>
								<Button color='primary' size='lg' onClick={() => setViewMore(!viewMore)}>
									Et Free Distribution dans tout ca ?
								</Button>
							</Row>
						) : null}

						{viewMore ? (
							<>
								<Row>
									<Col xs='6'>
										<DescriptionFD />
									</Col>
									<Col xs='6'>
										<img src={Xavier} alt='Xavier' className='w-100' />
									</Col>
								</Row>
								<Row>
									<KeyPoints title='Chiffres clés' data={KeyFiguresFD} />
									<PolesFD />
								</Row>
								<Row>
									<Values title='Objectifs et valeurs' objectives={ObjectivesFD} values={ValuesFD} />
								</Row>
							</>
						) : null}

						{viewMore ? (
							<Row className='justify-content-center text-center my-4'>
								<Button color='primary' size='lg' onClick={() => setViewMore(!viewMore)}>
									Je suis calé sur FD !
								</Button>
							</Row>
						) : null}
					</div>
				</div>
			</article>
		</>
	);
}
