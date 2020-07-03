import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";

const abilities = [
	{
		id: 0,
		icon: "pen",
		title: "Compétences techniques",
		description: "yyy",
	},
	{
		id: 1,
		icon: "display",
		title: "Compétences managériales",
		description: "yyy",
	},
	{
		id: 2,
		icon: "shop",
		title: "Relationel",
		description: "yyy",
	},
	{
		id: 3,
		icon: "megaphone",
		title: "Autres compétences",
		description: "yyy",
	},
];

export default function Abilities() {
	return (
		<>
			<BlockTitle title='Mes compétences' />

			<Row>
				{abilities.map((ability) => {
					return (
						<Col xs='12' sm='6' key={ability.id}>
							<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
								<div className='info-list-w-icon'>
									<div className='info-block-w-icon'>
										<div className='ci-icon'>
											<i className={`linecons linecons-${ability.icon}`}></i>
										</div>
										<div className='ci-text'>
											<h4>{ability.title}</h4>
											<p>{ability.description}</p>
										</div>
									</div>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>
		</>
	);
}
