import React from "react";

//Utils
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";

//Reactstrap Components
import { Container, Row, Col } from "reactstrap";

//Assets
import Achievement from "../../../assets/img/illustrations/achievement_.svg";
import Lesson from "../../../assets/img/illustrations/teacher.svg";
import Knowledge from "../../../assets/img/illustrations/knowledge_.svg";
import Human from "../../../assets/img/illustrations/artifical_inteligence.svg";
import Project from "../../../assets/img/illustrations/data_analysis_.svg";
import Spacer from "../../../components/Utils/Spacer";

export default function Bilan() {
	return (
		<Container className='features px-0 px-md-5'>
			<Zoom>
				<Row className='justify-content-center align-items-center'>
					<Col md='5' className='text-center'>
						<img src={Achievement} className='img-fluid w-75' alt='' />
					</Col>
					<Col md='6' className='mt-2 mt-md-0 features-details'>
						<BlockTitle title='Ma plus grande fierté' classes='my-2' />
						<p>
							En toute franchise, je suis vraiment très content des projets que l'on a pu produire au sein
							du pôle R&D cette année. Ma plus grande fierté réside donc en notre capacité à produire des
							outils utiles et surtout utilisés, dans les deadlines qui nous étaient imposées.
						</p>
						<ul>
							<li>
								<FontAwesomeIcon icon={faCheck} /> Fier d'avoir pu travailler pour un grand groupe sur
								des projets diversifiés !
							</li>
							<li>
								<FontAwesomeIcon icon={faCheck} /> Développement de 3 jolis outils utiles à toutes les
								entités de F Distribution.
							</li>
							<li>
								<FontAwesomeIcon icon={faCheck} /> Aucun retard de deadline !
							</li>
						</ul>
					</Col>
				</Row>
			</Zoom>
			<Spacer padding='80px' />

			<Zoom>
				<Row className='justify-content-center align-items-center'>
					<Col md='5' className='col-md-5 order-1 order-md-2 text-center'>
						<img src={Lesson} className='img-fluid w-75' alt='' />
					</Col>
					<Col md='6' className='mt-2 mt-md-0 features-details order-2 order-md-1'>
						<BlockTitle title='Une évolution personnelle ?' classes='my-2' />

						<p className='font-italic strikethrough'>"Je vais finir par le rêgler ce problème !!!!"</p>
						<p>
							Je pense avoir évoluer d'un point de vue professionnel mais également personnel. Je suis
							quelqu'un d'assez perservérant dans le développement et je n'aime pas être bloqué. Cependant
							un défaut que je n'avais pas conscience d'avoir est mon manque de communication face à ces
							bloquages. Je pouvais rester plusieurs heures sur un problèmes tout bête qui aurait pu se
							résoudre assez rapidement en échangant dessus. C'est un autre aspect sur lequel Harry m'a
							grandement fait évoluer !
						</p>
					</Col>
				</Row>
			</Zoom>
			<Spacer padding='80px' />

			<Zoom>
				<Row className='justify-content-center align-items-center'>
					<Col md='5' className='text-center'>
						<img src={Knowledge} className='img-fluid w-75' alt='' />
					</Col>
					<Col md='6' className='mt-2 mt-md-0 features-details'>
						<BlockTitle title="Les compétences que j'ai acquises" classes='my-2' />

						<p>
							Je pense que cette année m'a permis de bien évoluer sur mes compétences techniques mais
							également de mettre en pratique certaines de mes connaissances en UI/UX design. J'ai par
							ailleurs pu monter en compétences sur la gestion de projets techniques.
						</p>
						<ul>
							<li>
								<FontAwesomeIcon icon={faCheck} /> Amélioration de ma syntaxe React et découverte de
								nouvelles librairies (Redux/Mercure)
							</li>
							<li>
								<FontAwesomeIcon icon={faCheck} /> Amélioration de mes compétences en design
							</li>
							<li>
								<FontAwesomeIcon icon={faCheck} /> Meilleure compréhension des enjeux d'un projet
								technique
							</li>
						</ul>
					</Col>
				</Row>
			</Zoom>
			<Spacer padding='80px' />

			<Zoom>
				<Row className='justify-content-center align-items-center'>
					<Col md='5' className='order-1 order-md-2 text-center'>
						<img src={Human} className='img-fluid w-75' alt='' />
					</Col>
					<Col md='6' className='mt-2 mt-md-0 features-details order-2 order-md-1'>
						<BlockTitle title='Les apprentissages humains' classes='my-2' />

						<p className='font-italic'>
							"Une sensation de servir à quelque chose et d'aider directement les collaborateurs"
						</p>
						<p className='text-justify'>
							Cette expérience m'a surtout permis de prendre conscience de l'importance de faire quelque
							chose qui nous plait. En effet, réaliser que son travail est vraiment utile et surtout
							impacte des personnes plus ou moins proche de soi apporte une vision totalement différente
							du développement et surtout une vraie satisfaction !
						</p>
						<p className='text-justify'>
							J'ai pu travailler sur des projets concrets à des fins non commerciales. C'est une manière
							vraiment différente d'opérer qu'en cabinet de conseil (où j'ai passé 7 mois) et je pense que
							cette manière d'évoluer me convient bien plus.
						</p>
					</Col>
				</Row>
			</Zoom>
			<Spacer padding='80px' />

			<Zoom>
				<Row className='justify-content-center align-items-center'>
					<Col md='5' className='text-center'>
						<img src={Project} className='img-fluid w-75' alt='' />
					</Col>
					<Col md='6' className='mt-2 mt-md-0 features-details'>
						<BlockTitle title="L'apport à mon projet professionnel" classes='my-2' />

						<p>
							Outre le fait de réaliser que je ne souhaite à priori pas travailler en agence mais plus en
							entreprise sur des projets concrets, cette année m'a permit de me rassurer sur certains
							points concernant mon projet professionnel :
						</p>
						<ul>
							<li>
								<FontAwesomeIcon icon={faCheck} /> Le développement est un domaine qui me plaît !
							</li>
							<li>
								<FontAwesomeIcon icon={faCheck} /> C'est un monde très vaste et il me reste encore
								beaucoup à découvrir et apprendre.
							</li>
							<li>
								<FontAwesomeIcon icon={faCheck} /> Je suis vraiment motivé à continuer de m'améliorer et
								à monter en compétences (surtout sur la partie back-end)
							</li>
						</ul>
						<p>
							J'ai également pu "valider" la nécessité de bien comprendre tous les tenants et aboutissants
							d'un projet technique avant de vouloir assumer la légitimité d'un chef de projet.
						</p>
					</Col>
				</Row>
			</Zoom>
		</Container>
	);
}
