import React from "react";

const downloadCV = () => {
	console.log("Download");
};

export default function PageHome({ returnPage }) {
	return (
		<div className='fw-container'>
			<div className='row'>
				<div className=' col-xs-12 col-sm-12 '>
					<div id='col_inner_id-5efa6e3571974' className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
						<div id='profile-picture' className='home-content'>
							<div className='row flex-v-align flex-direction-reverse'>
								<div className='col-sm-12 col-md-6 col-lg-6'>
									<div className='home-photo'>
										<div
											className='hp-inner'
											style={{
												backgroundPosition: "calc(50% + -9.77913px) calc(50% + 3.67075px);",
											}}></div>
									</div>
								</div>

								<div className='col-sm-12 col-md-6 col-lg-6'>
									<div className='home-text'>
										<h1>Développeur Web - Free</h1>
										<p>
											Ce site a pour vocation de faire un retour d'expérience de de mon année
											d'alternance chez Free ainsi que de vous présenter mon parcours !
										</p>
										<div className='home-buttons'>
											<a href='#' onClick={() => returnPage(2)} className='btn btn-primary'>
												Voir le résumé
											</a>
											<a href='#' onClick={() => downloadCV()} className='btn btn-primary'>
												Télécharger mon CV
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
