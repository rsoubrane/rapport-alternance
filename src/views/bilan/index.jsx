import React from "react";

//Sections
import Bilan from "./sections/Bilan";
import Testimonials from "./sections/Testimonials";
import Acknowledgements from "./sections/Acknowledgements";

//Components
import HeaderBilan from "./components/Header";

export default function PageBilan() {
	return (
		<article className='page type-page pt-page-flipInLeft'>
			<div className='entry-content'>
				<HeaderBilan />

				<Bilan />
				<Testimonials />
				<Acknowledgements />
			</div>
		</article>
	);
}
