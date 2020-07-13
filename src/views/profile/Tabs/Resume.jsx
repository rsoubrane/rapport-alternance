import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../enterprise/components/BlockTitle";

const formations = [
	{
		id: 0,
		title: "Bac Scientifique",
		date: "2015",
		place: "Lycée Français Charles de Gaulle, Londres",
	},
	{
		id: 1,
		title: "CPGE MPSI",
		date: "2015-2017",
		place: "ISEP Paris",
	},
	{
		id: 2,
		title: "Bachelor Chargé de projet digital",
		date: "2017-2020",
		place: "ESD Paris",
	},
	{
		id: 3,
		title: "Master CTO & Tech Lead",
		date: "2020-2022",
		place: "EEMI Paris",
	},
];

const certifications = [
	{
		id: 0,
		title: "Certification Google Digital Active",
		issuer: "Google",
		date: "2017",
	},
	{
		id: 1,
		title: "React - The Complete Guide",
		issuer: "Udemy",
		date: "2019",
	},
	{
		id: 2,
		title: "React Native - The Practical Guide",
		issuer: "Udemy",
		date: "2020",
	},
];

const experiences = [
	{
		id: 0,
		title: "Développeur Web",
		date: "2017",
		place: "Calmedica, Paris",
		description: [
			{ id: 0, text: "Développement site WordPress" },
			{ id: 1, text: "Refactoring back-office (Symfony)" },
		],
	},
	{
		id: 1,
		title: "Esport coach & manager",
		date: "2018",
		place: "Allegiance, Los Angeles",
		description: [
			{ id: 0, text: "Gestion d’une équipe professionnelle sur un jeu vidéo" },
			{ id: 1, text: "organisation d’entrainements et de débriefing quotidiens" },
		],
	},
	{
		id: 2,
		title: "Développeur Full Stack (React & Node)",
		date: "2019",
		place: "onepoint, Paris",
		description: [
			{
				id: 0,
				text:
					"Automatisation des tests de performance, refactoring en front (React) et en back (Node / Express)",
			},
			{
				id: 1,
				text: "Amélioration des layouts et de l'aspect visuel de softwares pour BNP Paribas (React/Java)",
			},
		],
	},
	{
		id: 3,
		title: "Développeur Front End (React)",
		date: "2019-2020",
		place: "Free, Paris",
		description: [
			{
				id: 0,
				text: "Développement de plusieurs projets (React/Symfony)",
			},
			{
				id: 1,
				text: "Déploiement de projets sous docker",
			},
			{
				id: 2,
				text: "Propositions UX/UI",
			},
		],
	},
];

export default function TabResume() {
	const downloadCV = () => {
		console.log("Download");
	};

	return (
		<div className='section-inner custom-page-content'>
			<div className='page-header color-1'>
				<h2>Resume</h2>
			</div>
			<div className='page-content'>
				<Row>
					<Col xs='12' md='6'>
						<div className='block'>
							<BlockTitle title='Formations' />

							{formations.map((formation) => {
								return (
									<div className='timeline'>
										<div className='timeline-item'>
											<h4 className='item-title'>{formation.title}</h4>
											<span className='item-period'>{formation.date}</span>
											<span className='item-small'>{formation.place}</span>
										</div>
									</div>
								);
							})}
						</div>

						<div className='block'>
							<BlockTitle title='Certifications' />

							{certifications.map((certification) => {
								return (
									<div class='certificate-item clearfix'>
										<div class='certi-logo'>
											<img
												src='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client-7.png'
												alt='logo'
											/>
										</div>
										<div class='certi-content'>
											<div class='certi-title'>
												<span>
													<h4>{certification.title}</h4>
												</span>{" "}
												-<span class='certi-id'>{certification.issuer}</span>
											</div>
											<div></div>
											<div class='certi-date'>
												<span>{certification.date}</span>
											</div>
										</div>
									</div>
									// <div className='certification-item'>
									// 	<h3>{certification.title}</h3>
									// </div>
								);
							})}
						</div>
					</Col>

					<Col xs='12' md='6'>
						<div className='block'>
							<BlockTitle title='Expériences' />

							{experiences.map((experience) => {
								return (
									<div className='timeline'>
										<div className='timeline-item'>
											<h4 className='item-title'>{experience.title}</h4>
											<span className='item-period'>{experience.date}</span>
											<span className='item-small'>{experience.place}</span>
											{experience.description
												? experience.description.map((x) => {
														return <p className='item-description'>{x.text}</p>;
												  })
												: null}
										</div>
									</div>
								);
							})}
						</div>
					</Col>
				</Row>
			</div>

			<Row>
				<Col xs='12'>
					<div className='block'>
						<div className='center download-resume'>
							<a href='#' onClick={() => downloadCV()} className='btn btn-primary'>
								Télécharger mon CV
							</a>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
