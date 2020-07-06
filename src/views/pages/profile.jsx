import React from "react";

//Components
import FunFacts from "../components/FunFacts";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import Presentation from "../components/Abilities";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header from "../components/Header";
import Summary from "../components/Summary";
import Projects2 from "../components/Projects2";

export default function PageProfile() {
	return (
		<article className='page type-page'>
			<div className='entry-content'>
				<div className='fw-page-builder-content'>
					<Header2 />
					<Summary />
					<Projects />
					<Projects2 />
					<FunFacts />
				</div>
			</div>
		</article>
	);
}
