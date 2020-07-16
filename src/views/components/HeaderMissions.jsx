import React from "react";

//Reactstrap Components
import { Col } from "reactstrap";

export default function HeaderEnterprise({ currentTab, returnClick }) {
	return (
		<Col xs='12' sm='6'>
			<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
				<div id='content-background' className='home-content third-style'>
					<div className='start-page-full-width start-page-half-width'>
						<div className='inner-content'>
							<div className='hp-text-block'>
								<h2 className='hp-main-title'>Missions</h2>

								<p>
									Pour bien comprendre l'intérêt des missions qui m'ont été accordées, il faut dabord
									que j'explique le principe de l'entité dans laquelle j'ai réalisé mon année
									d'alternance : Free Distribution.
								</p>

								<div className='hp-buttons'>
									<a
										href='/#'
										className={`btn btn-primary ${currentTab === 1 ? "active" : ""}`}
										onClick={() => returnClick(1)}>
										Free Distribution ?
									</a>
									<a
										href='/#'
										className={`btn btn-primary ${currentTab === 2 ? "active" : ""}`}
										onClick={() => returnClick(2)}>
										Chiffres clés
									</a>
									<a
										href='/#'
										className={`btn btn-primary ${currentTab === 3 ? "active" : ""}`}
										onClick={() => returnClick(3)}>
										Les pôles
									</a>
									<a
										href='/#'
										className={`btn btn-primary ${currentTab === 4 ? "active" : ""}`}
										onClick={() => returnClick(4)}>
										Objectifs et valeurs
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Col>
	);
}
