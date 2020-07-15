import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../components/BlockTitle";

//Assets
import Xavier from "../../../assets/img/free/xavier.png";
import LogoFD from "../../../assets/img/free/fd_white.png";

export default function DescriptionFD({ title }) {
	return (
		<Row className='mt-5 align-items-center'>
			<Col xs='12' md='7' className='order-1 order-md-0'>
				<BlockTitle title={title} />

				<p className='description-fd'>
					Free Distribution est une entité du groupe Free qui a vu le jour en 2010 à la demande de Xavier
					Niel. A ses débuts, FD représentait les boutiques (également appellées Free Center) et avait pour
					objectif de proposer un Service après vente physique pour les freebox majoritairement. Il n'était
					alors pas question de faire une quelconque prospection, mais simplement d'assurer une présence pour
					la marque et de faciliter l'aide aux abonnés dans les 4 boutiques initiales.
				</p>
				<p className='description-fd'>
					En 13 ans, Free Distribution a eu le temps d'énormément évoluer. Avec ses 91 boutiques ouvertes (400
					prévues pour 2024) et ses plus de 750 employés, l'entité s'est également diversifiée. Exit le
					service après vente; les conseillers des Free Center ont maintenant pour objectif de faire souscrire
					les prospects a des abonnement FreeBox ou mobiles (tout en assurant un certain SaV tout de même).
				</p>
				<p className='description-fd'>
					Une véritable "entreprise" s'est d'ailleurs construite autour de ces Free Center puisque l'entité a
					ses propres fonctions support, ses coachs et managers (qui gèrent les Free Center), son pôle de
					déploiement, son propre service RH, un pôle de formation et même un service de R&D dont je fais
					partie.
				</p>
			</Col>
			<Col xs='12' md='5' className='mt-3 mt-md-0 order-0 order-md-1'>
				<img src={Xavier} alt='Xavier' className='w-100' />
				<img src={LogoFD} alt='Xavier' className='mt-1 w-100' />
			</Col>
		</Row>
	);
}
