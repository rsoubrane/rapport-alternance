import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";

const data = [
	{
		id: 0,
		title: "Happy Clients",
		icon: "heart",
		value: 578,
	},
	{
		id: 1,
		title: "Heures de travail",
		icon: "clock",
		value: "1.350",
	},
	{
		id: 2,
		title: "Projets",
		icon: "tasks",
		value: 3,
	},
	{
		id: 3,
		title: "Cafés consommés",
		icon: "coffee",
		value: "1.475",
	},
];

export default function FunFacts() {
	return (
		<>
			<BlockTitle title='Fun Facts' />

			<Row>
				{data.map((x) => {
					return (
						<Col xs='12' sm='6' md='3'>
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
				})}
			</Row>

			<div className='fw-divider-space' style={{ paddingTop: "20px" }}></div>
		</>
	);
}
