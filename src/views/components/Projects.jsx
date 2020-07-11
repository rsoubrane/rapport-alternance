import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../enterprise/components/BlockTitle";
import Spacer from "../enterprise/components/Spacer";

export default function Projects({ title, data }) {
	return (
		<>
			<BlockTitle title={title} />

			<div className='projects owl-carousel owl-loaded owl-drag'>
				<div className='owl-stage-outer'>
					<Row
						className='owl-stage justify-content-center align-items-center'
						style={{
							transition: "all 0.25s ease 0s",
						}}>
						{data
							? data.map((project) => {
									return (
										<Col
											xs='6'
											md='4'
											className='owl-item active'
											style={{ width: "294px", marginRight: "10px" }}
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
							  })
							: null}
					</Row>
				</div>
			</div>

			<Spacer />
		</>
	);
}
