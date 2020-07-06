import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";

const data = [
	{
		id: 0,
		icon: "home",
		title: "Le fixe",
		description: [
			{ id: 1, text: "Part de marché Haut Débit et Très Haut Débit de 25%" },
			{ id: 0, text: "2 millions d’abonnés Fibre en 2020" },
		],
	},
	{
		id: 1,
		icon: "mobile",
		title: "Le mobile",
		description: [
			{ id: 0, text: "Part de marché mobile de 25%" },
			{ id: 1, text: "+ de 80% des abonnés sur le Forfait Free illimitée" },
			{ id: 2, text: "Plus de 25 000 sites en 2024" },
		],
	},
	{
		id: 2,
		icon: "store",
		title: "Le B2B",
		description: [
			{ id: 0, text: "5% de part de marché sur le marché des entreprises d’environ en 2024" },
			{ id: 1, text: "CA de l’activité entreprises d’environ 400/500M d’€ en 2024" },
		],
	},
	{
		id: 3,
		icon: "map",
		title: "Italie",
		description: [
			{ id: 0, text: "Environ 5 000 sites activés à fin 2020" },
			{ id: 1, text: "10 000 à 12 000 sites à fin 2024" },
			{ id: 2, text: "Générer 1,5 milliard€ de CA en Italie sur le long terme" },
		],
	},
];

export default function KeyPoints() {
	return (
		<>
			<BlockTitle title='Enjeux et objectifs stratégiques' />

			<Row>
				{data.map((x) => {
					return (
						<Col xs='12' sm='6' key={x.id}>
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
						</Col>
					);
				})}
			</Row>
		</>
	);
}
