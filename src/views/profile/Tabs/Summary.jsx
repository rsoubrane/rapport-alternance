import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Assets
import Profile from "../../../assets/img/profile.jpg";
import Technical from "../../../assets/img/icons/creativity_icon.png";
import Management from "../../../assets/img/icons/advetising_icon.png";
import Others from "../../../assets/img/icons/web_design_icon.png";
import BlockTitle from "../../enterprise/components/BlockTitle";

const data = [
	{
		id: 0,
		img: Technical,
		title: "Compétences Techniques",
		descriptions: [
			{
				id: 0,
				title: "HTML / CSS / JS",
			},
			{
				id: 1,
				title: "React / React Native",
			},
			{
				id: 2,
				title: "Node / SQL / GraphQL",
			},
		],
	},
	{
		id: 1,
		img: Management,
		title: "Compétences Managériales",
		descriptions: [
			{
				id: 0,
				title: "Gestion de projets",
			},
			{
				id: 1,
				title: "Capacité décisionnelle",
			},
			{
				id: 2,
				title: "Travail d'équipe",
			},
		],
	},
	{
		id: 2,
		img: Others,
		title: "Autres compétences",
		descriptions: [
			{
				id: 0,
				title: "UI / UX",
			},
			{
				id: 1,
				title: "SEO / SEA",
			},
			{
				id: 2,
				title: "Scrum / Kanban / Lean",
			},
		],
	},
];

export default function TabSummary() {
	return (
		<div className='section-inner start-page-content'>
			<div className='page-header'>
				<Row>
					<Col xs='4'>
						<div className='photo'>
							<img src={Profile} alt='Profile' />
						</div>
					</Col>

					<Col xs='8'>
						<div className='title-block'>
							<h1>Romain Soubrane</h1>
							<div className='sp-subtitle'>Développeur Web</div>
						</div>

						<div className='social-links'>
							<a href='#'>
								<i className='fab fa-twitter'></i>
							</a>
							<a href='#'>
								<i className='fab fa-facebook'></i>
							</a>
							<a href='#'>
								<i className='fab fa-instagram'></i>
							</a>
						</div>
					</Col>
				</Row>
			</div>

			<div className='page-content'>
				<Row>
					<Col xs='7'>
						<div className='about-me'>
							<BlockTitle title='À propos de moi' marginTop={0} />
							<p>
								Passioné de digital, je suis un développeur web spécialisé en React et Node. Dans le
								cadre de ma formation a l'
								<a href='https://ecole-du-digital.com' target='_blank'>
									ESD
								</a>
								, j'ai effectué une année en tant que développeur chez Free. Laissez-moi vous résumer
								mon expérience et vous présenter mes compétences !
							</p>
						</div>
					</Col>

					<Col xs='5'>
						<ul className='info-list'>
							<li>
								<span className='title'>Localisation</span>
								<span className='value'>Paris, France</span>
							</li>
							<li>
								<span className='title'>Langues</span>
								<span className='value'>Français, Anglais</span>
							</li>
							<li>
								<span className='title'>Website</span>
								<span className='value'>
									<a href='https://rsoubrane.com'>rsoubrane.com</a>
								</span>
							</li>
							<li>
								<span className='title'>Eail</span>
								<span className='value'>
									<a href='mailto:r.soubrane@icloud.com'>r.soubrane@icloud.com</a>
								</span>
							</li>
						</ul>
					</Col>
				</Row>

				<Row>
					<Col>
						<BlockTitle title='Mes compétences' />
					</Col>

					{data
						? data.map((skill) => {
								return (
									<Col xs='12' md='4' key={skill.id}>
										{/* <div class='services-1'>
												<span class='icon'>
													<i class='fa fa-times'></i>
												</span>
												<div class='desc'>
													<h3 class='mb-5'>
														<a href='#'>{skill.title}</a>
													</h3>
													{skill.descriptions.map((el) => (
														<h4 key={el.id}>{el.title}</h4>
													))}
												</div>
											</div> */}

										<div className='service-block'>
											<div className='service-info'>
												<div className='service-image'>
													<img src={skill.img} alt={`Skill-${skill.title}`} />
												</div>
												<h3>{skill.title}</h3>
												{skill.descriptions.map((el) => (
													<h5 key={el.id}>{el.title}</h5>
												))}
											</div>
										</div>
									</Col>
								);
						  })
						: null}
				</Row>
			</div>
		</div>
	);
}
