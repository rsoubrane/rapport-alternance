import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";

const data = [
	{
		id: 0,
		picto: "store",
		title: "Pôle vente et opération",
		description: "Gestion des Free Centers (boutiques Free), des coachs et managers de ces FC.",
	},
	{
		id: 1,
		picto: "store",
		title: "Pôle déploiement et maintenance",
		description: "Gestion de l'ouverture et maintenance de toutes les Free Centers de France",
	},
	{
		id: 2,
		picto: "computer",
		title: "Pôle développement",
		description: "Gestion de toutes les foncions supports, R&D (mon pôle), RH, etc.",
	},
];
export default function PolesFD() {
	return (
		<>
			<BlockTitle title='Pôles Free Distribution' />

			<Row className='px-5'>
				{data.map((pole) => {
					return (
						<Col>
							<Row>
								<Col xs='5'>
									<i className={`fa fa-${pole.picto}`} style={{ width: "100px" }}></i>
								</Col>
								<Col xs='1'>
									<hr />
								</Col>
								<Col xs='6'>
									<div>
										<h3>{pole.title}</h3>
										<h5>{pole.description}</h5>
									</div>
								</Col>
							</Row>
						</Col>
					);
				})}
			</Row>
		</>
	);
}
