import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

export default function BlockTitle({ title, marginTop }) {
	console.log("marginTop: ", marginTop);
	return (
		<Row className={`${marginTop ? `mt-${marginTop}` : "mt-5"} mb-3`}>
			<Col xs='12' sm='12'>
				<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
					<div className='block-title'>
						<h2>{title}</h2>
					</div>
				</div>
			</Col>
		</Row>
	);
}
