import React from "react";

//Reactstrap Components
import { Container } from "reactstrap";

//Components
import FunFacts from "../components/FunFacts";

import "./about.scss";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Projects";
import Presentation from "../components/Abilities";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header from "../components/Header";
import Summary from "../components/Summary";

export default function PageAbout() {
	return (
		<article className='page type-page'>
			<div className='entry-content'>
				<div className='fw-page-builder-content'>
					<Header />
					<Summary />
					<Clients />
					<FunFacts />
				</div>
			</div>
		</article>
	);
}
