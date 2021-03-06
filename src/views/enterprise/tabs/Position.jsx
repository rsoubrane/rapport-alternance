import React from "react";

//Utils
import Fade from "react-reveal/Fade";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";

//Assets
import FAI from "../../../assets/img/data/FAI.webp";
import Mobile from "../../../assets/img/data/Mobile.webp";

export default function Position({ title }) {
	return (
		<>
			<BlockTitle title={title} />

			<Row className='align-items-center justify-content-center text-center'>
				<Col xs='12' md='6' className='my-3'>
					<Fade delay={400}>
						<h3>FAI (2019)</h3>
						<img src={FAI} alt='FAI' className='w-100' />
					</Fade>
				</Col>
				<Col xs='12' sm='6' className='my-3 w-100'>
					<Fade delay={100}>
						<h3>Mobile (2019)</h3>
						<img src={Mobile} alt='Mobile' className='w-100' />
					</Fade>
				</Col>
			</Row>
		</>
	);
}
