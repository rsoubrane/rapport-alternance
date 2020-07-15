import React, { useState } from "react";

//Reactstrap Components
import { Container, Row, Col } from "reactstrap";

//Components
import HeaderBilan from "./components/Header";
import Testimonials from "./components/Testimonials";
import Acknowledgements from "./components/Acknowledgements";
import Bilan from "./components/Bilan";

export default function PageBilan() {
	const [currentTab, setCurrentTab] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const switchTab = () => {
		switch (currentTab) {
			case 1:
				return;
			case 2:
				return;
			case 3:
				return;
			case 4:
				return;
			default:
				return null;
		}
	};

	const handleTabHeader = (returned) => {
		setCurrentTab(returned);
	};

	return (
		<article className='page type-page'>
			<div className='entry-content'>
				<div className='fw-page-builder-content'>
					<Row className='align-items-center'>
						<HeaderBilan currentTab={currentTab} returnClick={handleTabHeader} />
					</Row>
				</div>

				<Bilan />
				<Testimonials />
				<Acknowledgements />
			</div>
		</article>
	);
}
