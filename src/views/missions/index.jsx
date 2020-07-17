import React from "react";

//Components
import HeaderMissions from "./components/Header";

//Sections
import Roles from "./sections/Roles";
import FunFacts from "./sections/FunFacts";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";

//Data
import { FunFacts as MyFunFacts, ProjectsDetails, Technologies as MyTechnologies } from "../../data";

export default function PageMissions() {
	return (
		<article className='page type-page pt-page-scaleUpCenter'>
			<div className='entry-content'>
				<HeaderMissions />

				<Roles title='Mes rôles' />
				<FunFacts title='Fun Facts' data={MyFunFacts} />
				<Projects title='Les projets' data={ProjectsDetails} />
				<Technologies title='Les technologies' data={MyTechnologies} />
			</div>
		</article>
	);
}
