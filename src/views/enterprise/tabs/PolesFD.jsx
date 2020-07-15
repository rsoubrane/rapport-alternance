import React from "react";

//Utils
import Fade from "react-reveal/Fade";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../components/BlockTitle";

export default function PolesFD({ title, data }) {
	return (
		<>
			<BlockTitle title={title} />

			<Fade duration={3000}>
				<Row className='px-md-5 h-100'>
					{data.map((pole) => {
						return (
							<Col xs='12' md='4' className='fw-col-inner h-100' data-paddings='0px 0px 0px 0px'>
								<div className='certificate-item clearfix'>
									<div className='certi-icon'>
										<i className={`fa fa-${pole.icon}`}></i>
									</div>
									<div className='certi-content'>
										<div className='certi-title'>
											<h4>{pole.title}</h4>
										</div>
										<div className='certi-id'>
											<span>{pole.description}</span>
										</div>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</Fade>
		</>
	);
}
