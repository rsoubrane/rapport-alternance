import React, { useState } from "react";

//Reactstrap Components
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";

export default function PageEnterprise() {
	const [currentTab, setCurrentTab] = useState(1);

	const switchTab = () => {
		switch (currentTab) {
			case 1:
				return (
					<>
						<h3>Description Free</h3>
					</>
				);
			case 2:
				return (
					<>
						<h3>Description Free Distribution</h3>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<Container fluid>
			<h1>Enterprise Tab</h1>

			<Row className='justify-content-center'>
				<ButtonGroup className='sub_menu'>
					<Button
						size='lg'
						color={currentTab === 1 ? "primary" : "secondary"}
						onClick={() => setCurrentTab(1)}
						className='switch-button'>
						Free
					</Button>
					<Button
						size='lg'
						color={currentTab === 2 ? "primary" : "secondary"}
						onClick={() => setCurrentTab(2)}
						className='switch-button'>
						Free Distribution
					</Button>
				</ButtonGroup>
			</Row>
			<Row>{switchTab()}</Row>
		</Container>
	);
}
