import React from "react";

//Utils
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bounce from "react-reveal/Bounce";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";

export default function Objectives({ title, data }) {
	const returnDelay = (delay) => {
		return parseInt(200 + 100 * delay);
	};

	return (
		<>
			<BlockTitle title={title} />

			<Row>
				{data
					? data.map((x) => {
							return (
								<Col xs='12' sm='6' key={x.id}>
									<Bounce delay={returnDelay(x.id)}>
										<div className='info-list-w-icon'>
											<div className='info-block-w-icon'>
												<div className='ci-icon'>
													<FontAwesomeIcon icon={x.icon} />
												</div>
												<div className='ci-text'>
													<h4>{x.title}</h4>
													<ul className='text-white'>
														{x.description.map((el) => {
															return (
																<li key={el.id} className='mr-2'>
																	{el.text}
																</li>
															);
														})}
													</ul>
												</div>
											</div>
										</div>
									</Bounce>
								</Col>
							);
					  })
					: null}
			</Row>
		</>
	);
}
