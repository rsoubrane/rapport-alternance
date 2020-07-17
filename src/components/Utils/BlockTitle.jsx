import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

export default function BlockTitle({ title, classes }) {
	return (
		<Row className={` ${classes ? classes : "mt-5 mb-3"}`}>
			<Col xs='12' sm='12'>
				<div className='block-title'>
					<h2>{title}</h2>
				</div>
			</Col>
		</Row>
	);
}
