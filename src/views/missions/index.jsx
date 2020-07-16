import React from "react";

//Sections
import Roles from "./sections/Roles";
import FunFacts from "./sections/FunFacts";
import Projects from "./sections/Projects";

//Components
import HeaderMissions from "./components/Header";

//Data
import { FunFacts as MyFunFacts, ProjectsDetails } from "../../variables";

export default function PageMissions() {
	return (
		<article className='page type-page pt-page-scaleUpCenter'>
			<div className='entry-content'>
				<HeaderMissions />

				<Roles title='Mes rôles' />
				<FunFacts title='Fun Facts' data={MyFunFacts} />
				<Projects title='Les projets' data={ProjectsDetails} />
			</div>
		</article>
	);
}
