import React from "react";

//Reactstrap Components
import { Row, Col, Modal, ModalBody } from "reactstrap";

//Components
import Spacer from "./Spacer";

//Assets
import Iliad from "../../../assets/img/free/iliad2.jpg";
import Free from "../../../assets/img/free/free2.jpg";
import Forfaits from "../../../assets/img/free/forfaits-mobiles.png";

export default function Details({ isOpen, closeModal }) {
	const toggle = () => {
		closeModal();
	};

	return (
		<Modal
			isOpen={isOpen}
			toggle={toggle}
			id='fsModal'
			className='animated bounceIn'
			tabIndex='-1'
			role='dialog'
			aria-labelledby='myModalLabel'
			aria-hidden='true'>
			<ModalBody>
				<article className='fw-details hentry'>
					<div className='details-page-content'>
						<div className='details-page-wrapper'>
							<nav className='details-page-nav'>
								<div className='nav-item'>
									<a href='#' onClick={closeModal}>
										<i className='fa fa-times'></i>
									</a>
								</div>
							</nav>

							<div className='details-page-title'>
								<h1>UES Iliad</h1>
							</div>

							<Row>
								<Col sm='12'>
									<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
										<div className='single-image '>
											<a href='#'>
												<img src={Iliad} className='w-100' alt='Boutique' />
											</a>
										</div>
										<h4>
											Fondé en 1991, Iliad est un groupe français de télécommunications en
											constant développement. Fondé par Xavier Niel et présidé par Thomas Reynaud,
											le groupe est présent en France mais aussi au Maroc et en Italie. Le groupe
											Iliad se spécialise surtout dans la téléphonie mobile et l'internet fixe.
										</h4>
										<Spacer />
										<Row>
											<Col xs='12'>
												<h1 className='mt-5'>Quelle est l'histoire du groupe Iliad ?</h1>
												<p
													style={{
														fontSize: "16px",
														textAlign: "justify",
													}}>
													Lorsque Xavier Niel rachète Fermic Multimédia en 1991, on est encore
													bien loin des activités du groupe Iliad. En effet, Fermic Multimédia
													est à l'époque un éditeur de services télématiques réservés aux
													adultes. Autrement dit... le «Minitel rose» ! Ce n'est qu'en 1994
													qu'Iliad se lance sur le marché des fournisseurs d'accès à Internet.
													Le groupe décide alors d'interconnecter ses services télématiques
													Minitel avec l'Internet exploité à l'époque par Worldnet.
													Télématique est le terme qui recouvre les applications qui associent
													télécommunications et informatique. Ce terme apparaît en France
													grâce à la filière technologique qui va permettre au Minitel de voir
													le jour.
												</p>
											</Col>
										</Row>
										<Spacer />
										<Row className='align-items-center'>
											<Col xs='12' md='8'>
												<h1>Iliad fournisseur d'accès à Internet avec Free</h1>

												<p
													style={{
														fontSize: "16px",
														textAlign: "justify",
													}}>
													En 1996, le groupe Iliad lance le service Minitel 3617 ANNU, filiale
													qui développe des services d'annuaire inversé. A la fin des années
													90, le groupe Iliad obtient les licences de télécommunications
													nécessaires pour exploiter son propre réseau de télécommunications
													et commercialiser ces services destinés au public. C'est ainsi que
													naît le réseau Free. Fin 2001, Iliad rachète la licence
													d'exploitation de «One.Tel» à l'entreprise britannique Centrica
													Télécommunications pour dix ans. Le groupe français cherche ainsi à
													accroître ses recherches pour développer son terminal multimédia
													appelé «Freebox». Iliad lance son offre Free haut débit à 29,99€ par
													mois à l'automne 2002. C'est déjà une petite révolution car la
													plupart des autres fournisseurs d'accès à internet proposent un
													forfait à presque 45€ par mois ! A partir de mars 2003, Iliad
													devient le deuxième fournisseur Internet DSL français, juste
													derrière France Telecom.
												</p>
											</Col>
											<Col xs='12' md='4' className='d-md-block'>
												<img src={Free} alt='Minitel' />
											</Col>
										</Row>
										<Spacer />
										<Row>
											<Col xs='12'>
												<h1>Un groupe en constante innovation</h1>
												<p
													style={{
														fontSize: "16px",
														textAlign: "justify",
													}}>
													En 2004, le groupe lance la 4e version de sa Freebox qui se vend
													désormais sous forme de routeur équipé du Wi-fi. La société déploie
													en même temps le dégroupage total dans toutes les grandes villes de
													France. C'est également cette année-là qu'Iliad entre en bourse. Ses
													actions sont cotées à la Bourse de Paris sous le sigle ILD. En 2005
													se forme un partenariat avec Canalplay de Canal+. Iliad propose
													alors la première offre de vidéo à la demande par DSL. Vient ensuite
													le développement d'une offre fibre optique à très haut débit qui
													s'étend d'abord à Paris puis dans plusieurs grandes villes de
													France. Avec le rachat d'Altice en 2008, Iliad Telecom devient le
													leader d'Internet juste derrière Orange. Grâce aux différentes
													rachats opérés par le groupe, en 2019, il faut compter plus de 1,1
													millions d'abonnés au très haut débit et plus de 5 millions au haut
													débit.
												</p>
											</Col>
										</Row>

										<Spacer />
										<h1>Iliad et la téléphonie mobile</h1>
										<Row>
											<Col xs='12' md='6'>
												<h3>Free Mobile L'entrée de Free sur le marché des offres mobile</h3>

												<p
													style={{
														fontSize: "16px",
														textAlign: "justify",
													}}>
													C'est à partir de 2009 que la filiale d'Iliad Free Mobile reçoit
													l'autorisation de l'ARCEP (Autorité de Régulation des Communications
													Électroniques et des Postes). Il s'agit d'une autorité en charge de
													la régulation des communications électroniques et des postes en
													France) de développer son propre réseau de téléphonie mobile, ce qui
													lui a permis d'intégrer le cercle fermé des opérateurs de réseau
													mobile aux côtés d' Orange, SFR et Bouygues Telecom. L'opérateur
													devait proposer ses offres et services à partir du 12 janvier 2012
													au plus tard. En décembre 2010, Iliad obtient le droit d'intervenir
													sur le marché de la téléphonie mobile en s'engageant auprès de
													l'autorité à fournir un tarif avantageux à ses abonnés. Free va
													ensuite présenter une offre 3G relativement intéressante mais
													l'opérateur reste, à ce moment-là, en retard sur ses concurrents en
													ce qui concerne la 4G (la société a déjà mis près de 10 ans à
													proposer la 3G).
												</p>
											</Col>
											<Col xs='12' md='6'>
												<h3>Les offres mobile de Free</h3>

												<img src={Forfaits} alt='Forfaits' />

												<h5
													style={{
														fontSize: "16px",
														textAlign: "center",
														marginTop: "15px",
													}}>
													Au premier trimestre 2020, Free comptait 13,5 millions de clients
													mobile.
												</h5>
											</Col>
										</Row>

										<Spacer />

										<h1>Les différentes entités du groupe iliad</h1>
										<Row className='align-items-start'>
											<Col xs='12' md='6'>
												<p
													style={{
														fontSize: "16px",
														textAlign: "justify",
													}}>
													Le groupe Iliad est organisé sous la forme d'une Unité Économique et
													sociale (UES). Une UES est un regroupement de plusieurs entreprises
													juridiquement distinctes dotées d'une direction unique d'une
													communauté de travailleurs dont les activités sont similaires ou
													complémentaires. L'UES Iliad regroupe des entités autour de sujets
													tels que la fibre optique (déploiement et maintenance, la gestion du
													réseau Mobile, la marque et ses fonctions supports ou encore le
													courtage en assurance.
												</p>
												<p
													style={{
														fontSize: "16px",
														textAlign: "justify",
													}}>
													Iliad a également racheté d'autres entreprises afin de faire grossir
													les effectifs et de proposer encore plus de service à ses abonnés.
													On retrovue par exemple Protelco, une entreprise de techniciens
													itinérants qui se déplacent chez les abonnés, Oneline qui est une
													solution d'hébergement web ou encore des centres d'appels tels que
													Mobipel, Equaline, Centrapel, Totalcalll, etc.
												</p>
											</Col>
											<Col xs='12' md='6' className='pl-md-5'>
												<Row>
													<Col xs='6' md='4' className='text-center'>
														<h3 className='text-uppercase'>Iliad</h3>
														<p>Maison mère et autres fonctions support de l'UES</p>
													</Col>
													<Col xs='6' md='4' className='text-center'>
														<h3 className='text-uppercase'>Free SAS</h3>
														<p>La marque Free ainsi que les fonctions supports</p>
													</Col>
													<Col xs='6' md='4' className='text-center'>
														<h3 className='text-uppercase'>Free Infrastructures</h3>
														<p>Déploiement de la fibre optique sur le réseau</p>
													</Col>
													<Col xs='6' md='4' className='text-center'>
														<h3 className='text-uppercase'>Free Réseau</h3>
														<p>Maintenance des équipements fibre optique</p>
													</Col>
													<Col xs='6' md='4' className='text-center'>
														<h3 className='text-uppercase'>Free Mobile</h3>
														<p>Gestion du réseau mobile</p>
													</Col>
													<Col xs='6' md='4' className='text-center'>
														<h3 className='text-uppercase'>Free Distributuion</h3>
														<p>Gestion des Free Centers (les boutiques Free)</p>
													</Col>
												</Row>
											</Col>
										</Row>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</article>
			</ModalBody>
		</Modal>
	);
}
