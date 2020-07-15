import React, { useState } from "react";

//Reactstrap Components
import { Row, Col, Button } from "reactstrap";

//Components
import TabSummary from "./Tabs/Summary";
import TabResume from "./Tabs/Resume";

export default function PageProfile() {
	const [currentTab, setCurrentTab] = useState(1);

	const switchTab = () => {
		switch (currentTab) {
			case 1:
				return <TabSummary />;
			case 2:
				return <TabResume />;
			default:
				break;
		}
	};

	return (
		<div className='subpages'>
			{switchTab()}
			{currentTab === 1 ? (
				<Button className='switch-page right' onClick={() => setCurrentTab(2)}>
					x
				</Button>
			) : (
				<Button className='switch-page left' onClick={() => setCurrentTab(1)}>
					x
				</Button>
			)}
		</div>
	);
}
