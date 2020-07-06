import React, { useState } from "react";

//Reactstrap Components
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";

//Utils
import Rodal from "rodal";

//Components
import FunFacts from "../components/FunFacts";

import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import Presentation from "../components/Abilities";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header from "../components/Header";
import HeaderEnterprise from "../components/HeaderEnterprise";
import Summary from "../components/Summary";
import Projects2 from "../components/Projects2";
import KeyPoints from "../components/Objectives";
import Timeline from "../components/Timeline";
import Position from "../components/Position";

export default function PageEnterprise() {
	const [currentTab, setCurrentTab] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const switchTab = () => {
		switch (currentTab) {
			case 1:
				return <Timeline />;
			case 2:
				return <KeyPoints />;
			case 3:
				return <Position />;
			default:
				return null;
		}
	};

	const handleOpenModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<Rodal
				visible={isModalOpen}
				onClose={() => setIsModalOpen(!isModalOpen)}
				animation='flip'
				className='rodal-lg'>
				<article className='page type-page'>
					<div className='entry-content'>
						<div className='fw-page-builder-content'>Hello World</div>
						<Row>
							<Col>1</Col>
							<Col>
								<Position />
							</Col>
						</Row>
					</div>
				</article>
			</Rodal>

			<article className='page type-page'>
				<div className='entry-content'>
					<div className='fw-page-builder-content'>
						<HeaderEnterprise returnClick={handleOpenModal} />
						<Row className='justify-content-center d-none d-md-block text-center'>
							<ButtonGroup className='sub_menu'>
								<Button
									size='lg'
									color={currentTab === 1 ? "primary" : "secondary"}
									onClick={() => setCurrentTab(1)}
									className='switch-button'>
									Histoire
								</Button>
								<Button
									size='lg'
									color={currentTab === 2 ? "primary" : "secondary"}
									onClick={() => setCurrentTab(2)}
									className='switch-button'>
									Enjeux et objectifs stratégique
								</Button>
								<Button
									size='lg'
									color={currentTab === 3 ? "primary" : "secondary"}
									onClick={() => setCurrentTab(3)}
									className='switch-button'>
									Positionnement
								</Button>
							</ButtonGroup>
						</Row>
						<Row className='d-none d-md-block'>{switchTab()}</Row>

						<Row className='d-md-none'>
							<Timeline />
							<KeyPoints />
							<Position />
						</Row>

						<Projects2 />
					</div>
				</div>
			</article>
		</>
	);
}
