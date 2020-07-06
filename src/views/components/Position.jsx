import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";

//Assets
import FAI from "../../assets/img/data/FAI.png";
import Mobile from "../../assets/img/data/Mobile.png";

export default function Position() {
	return (
		<>
			<BlockTitle title='Positionnement et parts de marché' />

			<Row className='align-items-center justify-content-center text-center'>
				<Col xs='12' md='6' className='my-3'>
					<h3>FAI (2019)</h3>
					<img src={FAI} alt='FAI' className='w-100' />
				</Col>
				<Col xs='12' sm='6' className='my-3' className='w-100'>
					<h3>Mobile (2019)</h3>
					<img src={Mobile} alt='Mobile' className='w-100' />
				</Col>
			</Row>
		</>
	);
}
