import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";

//Assets
import Pym from "../../assets/img/projects/pym.png";
import TheMask from "../../assets/img/projects/the_mask.png";

const projects = [
	{ id: 0, title: "Pym", imgSrc: Pym },
	{ id: 1, title: "The Mask", imgSrc: TheMask },
	{ id: 2, title: "Jarvis" },
];

export default function Projects() {
	return (
		<>
			<BlockTitle title='Projets' />

			<div className='projects owl-carousel owl-loaded owl-drag'>
				<div className='owl-stage-outer'>
					<Row
						className='owl-stage justify-content-center align-items-center'
						style={{
							transition: "all 0.25s ease 0s",
						}}>
						{projects.map((project) => {
							return (
								<Col
									xs='6'
									md='4'
									className='owl-item active'
									style={{ width: "294px", marginRight: "10px;" }}
									key={project.id}>
									<div className='client-block'>
										<a href='#' title={project.title}>
											{project.imgSrc ? (
												<img src={project.imgSrc} alt={project.title} />
											) : (
												<h3>{project.title}</h3>
											)}
										</a>
									</div>
								</Col>
							);
						})}
					</Row>
				</div>
			</div>

			<div className='fw-divider-space' style={{ paddingTop: "20px" }}></div>
		</>
	);
}
