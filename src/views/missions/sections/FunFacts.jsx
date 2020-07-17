import React from "react";

//Utils
import Zoom from "react-reveal/Zoom";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";
import Spacer from "../../../components/Utils/Spacer";

export default function FunFacts({ title, data }) {
	const returnDelay = (delay) => {
		return parseInt(100 * delay);
	};

	return (
		<>
			<BlockTitle title={title} />

			<Row>
				{data
					? data.map((x) => {
							return (
								<Col
									xs='12'
									sm='6'
									md={`${data.length > 3 ? "3" : "4"}`}
									className='align-items-stretch'
									key={x.id}>
									<Zoom delay={returnDelay(x.id)}>
										<div className='lm-info-block gray-default'>
											<i className={`fa fa-${x.icon}`}></i>
											<h4>{x.title}</h4>
											<span className='lm-info-block-value'>{x.value}</span>
											<span className='lm-info-block-text'></span>
										</div>
									</Zoom>
								</Col>
							);
					  })
					: null}
			</Row>

			<Spacer padding='20px' />
		</>
	);
}
