import React, { useState } from "react";

//Reactstrap Components
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";

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

	return (
		<article className='page type-page'>
			<div className='entry-content'>
				<div className='fw-page-builder-content'>
					<HeaderEnterprise />
					<Row className='justify-content-center'>
						<ButtonGroup className='sub_menu'>
							<Button
								size='lg'
								color={currentTab === 1 ? "primary" : "secondary"}
								onClick={() => setCurrentTab(1)}
								className='switch-button'>
								Timeline
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
					<Row>{switchTab()}</Row>

					<Projects />
					<Projects2 />
					<FunFacts />
				</div>
			</div>
		</article>
	);
}
