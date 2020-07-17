import React, { useState } from "react";

//Reactstrap Components
import { Row, ButtonGroup, Button } from "reactstrap";

//Data
import { KeyFiguresEnterprise, TimelineEnterprise, ObjectivesIliad, ValuesFree, PolesFD as Poles } from "../../data";

//Tabs
import KeyPoints from "./tabs/KeyPoints";
import Timeline from "./tabs/Timeline";
import Objectives from "./tabs/Objectives";
import Position from "./tabs/Position";
import Values from "./tabs/Values";

//Sections
import PolesFD from "./sections/PolesFD";
import DescriptionFD from "./sections/DescriptionFD";
import ObjectivesFD from "./sections/ObjectivesFD";

//Components
import HeaderEnterprise from "./components/Header";
import Details from "./components/Details";

export default function PageEnterprise({ returnPage }) {
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
				return <Position title='Positionnement et parts de marché' />;
			case 5:
				return <Values title='Valeurs' data={ValuesFree} />;
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

			<article className='page type-page pt-page-scaleUpCenter'>
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
								<Button
									size='lg'
									color={currentTab === 5 ? "primary" : "secondary"}
									onClick={() => setCurrentTab(5)}
									className='switch-button'>
									Valeurs
								</Button>
							</ButtonGroup>
						</Row>
						<Row className='d-none d-md-block'>{switchTab()}</Row>
						<Row className='d-md-none'>
							<KeyPoints title='Chiffres clés' data={KeyFiguresEnterprise} />
							<Timeline title='Dates importantes de Free' data={TimelineEnterprise} />
							<Position title='Positionnement et parts de marché' />
							<Objectives title='Enjeux et objectifs stratégiques' data={ObjectivesIliad} />
							<Values title='Valeurs' data={ValuesFree} />
						</Row>

						{!viewMore ? (
							<Row className='justify-content-center text-center mt-5 mb-3'>
								<Button color='primary' size='lg' onClick={() => setViewMore(!viewMore)}>
									Et Free Distribution dans tout ca ?
								</Button>
							</Row>
						) : null}

						{viewMore ? (
							<>
								<DescriptionFD title="Free Distribution c'est quoi ?" />
								<PolesFD title='Pôles de Free Distribution' data={Poles} />
								<ObjectivesFD title='Objectifs de Free Distribution' returnPage={returnPage} />
							</>
						) : null}

						{viewMore ? (
							<Row className='justify-content-center text-center mt-5 mb-3'>
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
