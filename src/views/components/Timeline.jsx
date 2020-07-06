import React from "react";
import { Container, Row, Col } from "reactstrap";
import BlockTitle from "./BlockTitle";

const data = [
	{
		id: 0,
		date: "1991",
		title: "Fondation Iliad",
		description: "Xavier Niel rachète Fermic et Multimedia et le renomme en Iliad",
	},
	{
		id: 1,
		date: "1999",
		title: "Fondation Free",
		description: "Iliad obtient des licenses de télécoms, ce qui marque la naissance de Free.",
	},
	{
		id: 2,
		date: "2002",
		title: "Lancement du triple play",
		description: "Iliad propose le triple play: Internet, Fixe et TV",
	},
	{
		id: 3,
		date: "2007",
		title: "Lancement Fibre",
		description: "Free lance l'offre fibre optique avec un débit de 100 mbits/s",
	},
	{
		id: 4,
		date: "2010",
		title: "Révolution mobile",
		description: "Free obtient les licenses 3G et lance une véritable révolution sur les coûts des forfaits mobile",
	},
	{
		id: 5,
		date: "2018",
		title: "Italia !",
		description: "Initiation du déploiement a l'international avec un lancement en Italie",
	},
];

export default function Timeline() {
	return (
		<Container className='mb-5'>
			<BlockTitle title='Dates importantes de Free' />

			<div className='main-timeline'>
				<Row className='h-100'>
					{data.map((x) => {
						return (
							<Col xs='6' md='2' className='timeline' key={x.id}>
								<span className='timeline-icon'>
									<a className='fa'>{x.date}</a>
								</span>
								<div className='border'></div>
								<div className='timeline-content text-center'>
									<h4 className='title '>{x.title}</h4>
									<p className='description'>{x.description}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</div>
		</Container>
	);
}
