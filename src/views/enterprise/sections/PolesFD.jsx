import React from "react";

//Utils
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";

export default function PolesFD({ title, data }) {
	return (
		<>
			<BlockTitle title={title} />

			<Fade duration={3000}>
				<Row className='px-md-5 h-100'>
					{data.map((pole) => {
						return (
							<Col xs='12' md='4' className='h-100' key={pole.id}>
								<div className='certificate-item clearfix'>
									<div className='certi-icon'>
										<FontAwesomeIcon icon={pole.icon} />
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
