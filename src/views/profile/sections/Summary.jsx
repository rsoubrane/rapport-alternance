import React from "react";

//Utils
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";

//Assets
import Profile from "../../../assets/img/profile/romain.webp";

//Data
import { Abilities } from "../../../data";

export default function TabSummary() {
	return (
		<div className='section-inner start-page-content pt-page-rotatePullRight'>
			<div className='page-header'>
				<Row>
					<Col xs='12' md='4'>
						<div className='photo'>
							<img src={Profile} alt='Profile' />
						</div>
					</Col>

					<Col xs='12' md='8'>
						<div className='title-block'>
							<h1>Romain Soubrane</h1>
							<div className='sp-subtitle'>Développeur Web</div>
						</div>

						<div className='social-links'>
							<a href='https://twitter.com/EpticRS' target='_blank' rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a href='https://linkedin.com/in/rsoubrane' target='_blank' rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a href='https://instagram.com/rsoubrane' target='_blank' rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</div>
					</Col>
				</Row>
			</div>

			<div className='page-content'>
				<Row>
					<Col xs='12' md='7'>
						<div className='about-me'>
							<BlockTitle title='À propos de moi' marginTop={0} />
							<p className='text-justify'>
								Passioné de digital, je suis un développeur web spécialisé en React et Node. Dans le
								cadre de ma formation a l'
								<a href='https://ecole-du-digital.com' target='_blank' rel='noopener noreferrer'>
									ESD
								</a>
								, j'ai effectué une année en tant que développeur chez Free. Laissez-moi vous résumer
								mon expérience et vous présenter mes compétences !
							</p>
						</div>
					</Col>

					<Col xs='12' md='5'>
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
								<span className='title'>Email</span>
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

					{Abilities
						? Abilities.map((skill) => {
								console.log("skill: ", skill);
								return (
									<Col xs='12' md='4' className='align-items-stretch mt-3 mt-md-0' key={skill.id}>
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
