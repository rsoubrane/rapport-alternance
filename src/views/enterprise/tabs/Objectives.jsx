import React from "react";

//Utils
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
										<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
											<div className='info-list-w-icon'>
												<div className='info-block-w-icon'>
													<div className='ci-icon'>
														<i className={`fas fa-${x.icon}`}></i>
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