import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";
import Spacer from "./Spacer";

export default function KeyPoints({ title, data }) {
	return (
		<>
			<BlockTitle title={title} />

			<Row>
				{data
					? data.map((x) => {
							return (
								<Col xs='12' sm='6' md={`${data.length > 3 ? "3" : "4"}`} key={data.id}>
									<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
										<div className='lm-info-block gray-default'>
											<i className={`fa fa-${x.icon}`}></i>
											<h4>{x.title}</h4>
											<span className='lm-info-block-value'>{x.value}</span>
											<span className='lm-info-block-text'></span>
										</div>
									</div>
								</Col>
							);
					  })
					: null}
			</Row>

			<Spacer />
		</>
	);
}
