import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Container } from "reactstrap";
import Home from ".";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

const originalColors = ["#ff5f45", "#0798ec", "#fc6c7c", "#435b71", "orange", "blue", "purple", "yellow"];

class Fullpage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sectionsColor: [...originalColors],
			fullpages: [
				<Home />,
				{
					text: "Section 2",
				},
				{
					text: "Section 3",
				},
			],
		};
	}

	onLeave(origin, destination, direction) {
		console.log("onLeave", { origin, destination, direction });
		// arguments are mapped in order of fullpage.js callback arguments do something
		// with the event
	}

	render() {
		const { fullpages } = this.state;

		if (!fullpages.length) {
			return null;
		}

		return (
			<Container className='h-75 w-75'>
				<ReactFullpage
					debug /* Debug logging */
					// Required when using extensions
					navigation
					navigationPosition='left'
					navigationTooltips={["firstSlide", "secondSlide"]}
					showActiveTooltip
					slidesNavigation
					anchors={["firstPage", "secondPage", "thirdPage"]}
					sectionSelector={SECTION_SEL}
					onLeave={this.onLeave.bind(this)}
					sectionsColor={this.state.sectionsColor}
					render={(comp) => (
						<ReactFullpage.Wrapper>
							{fullpages.map(({ text }) => (
								<div key={text} className={SEL}>
									<h1>{text}</h1>
								</div>
							))}
						</ReactFullpage.Wrapper>
					)}
				/>
			</Container>
		);
	}
}

export default Fullpage;
