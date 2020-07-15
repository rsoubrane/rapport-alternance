import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../components/BlockTitle";

//Assets
import Boutique from "../../../assets/img/free/boutique.jpg";

export default function ObjectivesFD({ title, returnPage }) {
	return (
		<>
			<BlockTitle title={title} />

			<Row className='align-items-center'>
				<Col md='5' className='d-md-block'>
					<img src={Boutique} alt='Free Center' className='w-100' />
				</Col>
				<Col xs='12' md='7' className='mt-3 mt-md-0'>
					<p className='description-fd'>
						Les objectifs de Free Distribution sont assez simple. Faire en sorte d'augmenter les
						souscriptions à la fois de Freebox et de forfaits mobiles tout en conservant un taux de
						satisfaction du client de +65%. Le but est également de tâcher à proposer une réduction du temps
						d'attente ainsi que du temps de traitement afin de garantir la satisfaction du client.
					</p>
					<p className='description-fd'>
						Même si cela se traduit majoritairement en boutique, toutes les fonctions supports de FD œuvrent
						à ces objectifs. Cela passe par le déploiement de Free Center plaisant, à une formation optimale
						et même au développement d'outils tels que ceux sur lesquels j'ai pu travailler{" "}
						<a href='#' onClick={() => returnPage(4)}>
							durant mon année d'alternance
						</a>{" "}
						par exemple !
					</p>
				</Col>
			</Row>
		</>
	);
}
