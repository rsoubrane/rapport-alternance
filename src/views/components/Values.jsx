import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";

export default function Values({ title, objectives, values }) {
	return (
		<>
			<BlockTitle title={title} />

			<Row>
				<Col xs='6' sm='6'>
					{objectives
						? objectives.map((x) => {
								return (
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
								);
						  })
						: null}
				</Col>
				<Col xs='6' sm='6'>
					{values
						? values.map((x) => {
								return (
									<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
										<div className='info-list-w-icon'>
											<div className='info-block-w-icon'>
												<div className='ci-icon'>
													<i className={`fas fa-${x.icon}`}></i>
												</div>
												<div className='ci-text'>
													<h4>{x.title}</h4>
													<ul className='text-white'>{x.description}</ul>
												</div>
											</div>
										</div>
									</div>
								);
						  })
						: null}
				</Col>
			</Row>
		</>
	);
}
