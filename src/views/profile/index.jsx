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
			<Button onClick={() => (currentTab === 1 ? setCurrentTab(2) : setCurrentTab(1))}>Changer de page</Button>
		</div>
	);
}
