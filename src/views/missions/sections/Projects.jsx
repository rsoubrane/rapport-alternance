import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";

export default function Missions({ title, data }) {
	return (
		<>
			<BlockTitle title={title} />

			<Row className='service-details'>
				{data
					? data.map((project) => {
							return (
								<Col xs='12' md='4' className='d-flex align-items-stretch' key={project.id}>
									<div className='card'>
										<div className='card-img'>
											<img src={project.img} alt={project.title} />
										</div>
										<div className='card-body'>
											<h3 className='card-title'>{project.title}</h3>
											<p className='card-text text-justify'>{project.description}</p>
										</div>
									</div>
								</Col>
							);
					  })
					: null}
			</Row>
			<Row></Row>
		</>
	);
}
