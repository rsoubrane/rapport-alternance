import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";
import DownloadCV from "../../../components/DownloadCV";

//Data
import { Formations, Certifications, Experiences } from "../../../data";

export default function TabResume() {
	return (
		<div className='section-inner custom-page-content pt-page-rotatePullLeft'>
			<div className='page-header color-1'>
				<h2>Resume</h2>
			</div>
			<div className='page-content'>
				<Row>
					<Col xs='12' md='6'>
						<div className='block'>
							<BlockTitle title='Formations' />

							{Formations.map((formation) => {
								return (
									<div className='timeline' key={formation.id}>
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

							{Certifications.map((certification) => {
								return (
									<div className='certificate-item clearfix' key={certification.id}>
										<div
											className='certi-logo'
											style={{
												backgroundImage: `url(${certification.img})`,
											}}></div>
										<div className='certi-content'>
											<div className='certi-title'>
												<span>
													<h4>{certification.title}</h4>
												</span>
											</div>
											<div className='certi-date'>
												<span>{certification.date}</span>-
												<span className='certi-id'>{certification.issuer}</span>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</Col>

					<Col xs='12' md='6' className='pl-md-5'>
						<div className='block'>
							<BlockTitle title='Expériences' />

							{Experiences.map((experience) => {
								return (
									<div className='timeline' key={experience.id}>
										<div className='timeline-item'>
											<h4 className='item-title'>{experience.title}</h4>
											<span className='item-period'>{experience.date}</span>
											<span className='item-small'>{experience.place}</span>
											{experience.description
												? experience.description.map((x) => {
														return (
															<p className='item-description' key={x.id}>
																{x.text}
															</p>
														);
												  })
												: null}
										</div>
									</div>
								);
							})}
						</div>
					</Col>
				</Row>

				<Row>
					<Col xs='12'>
						<div className='block'>
							<div className='center download-resume mt-3 mt-md-5'>
								<DownloadCV />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}
