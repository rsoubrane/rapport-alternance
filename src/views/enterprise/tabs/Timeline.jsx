import React from "react";

//Reactstrap Components
import { Container, Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";

export default function Timeline({ title, data }) {
	return (
		<Container className='mb-5'>
			<BlockTitle title={title} />

			<div className='main-timeline'>
				<Row className='h-100'>
					{data
						? data.map((x) => {
								return (
									<Col xs='6' md='2' className='timeline' key={x.id}>
										<span className='timeline-icon'>
											<a href='/#' className='fa'>
												{x.date}
											</a>
										</span>
										<div className='border'></div>
										<div className='timeline-content text-center'>
											<h4 className='title '>{x.title}</h4>
											<p className='description'>{x.description}</p>
										</div>
									</Col>
								);
						  })
						: null}
				</Row>
			</div>
		</Container>
	);
}
