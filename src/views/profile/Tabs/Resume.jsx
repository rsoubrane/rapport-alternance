import React from "react";

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
				<div className='row'>
					<div className='col-sm-6 col-md-6 col-lg-6'>
						<div className='block'>
							<div className='block-title'>
								<h3>Formations</h3>
							</div>

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
					</div>

					<div className='col-sm-6 col-md-6 col-lg-6'>
						<div className='block'>
							<div className='block-title'>
								<h3>Experience</h3>
							</div>

							<div className='timeline'>
								<div className='timeline-item'>
									<h4 className='item-title'>Frontend-developer</h4>
									<span className='item-period'>Dec 2012 - Current</span>
									<span className='item-small'>Web Agency</span>
									<p className='item-description'>
										Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
									</p>
								</div>

								<div className='timeline-item'>
									<h4 className='item-title'>Web Designer</h4>
									<span className='item-period'>Dec 2011 - Nov 2012</span>
									<span className='item-small'>Apple Inc.</span>
									<p className='item-description'>
										Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
									</p>
								</div>

								<div className='timeline-item'>
									<h4 className='item-title'>Graphic Designer</h4>
									<span className='item-period'>Jan 2010 - Dec 2011</span>
									<span className='item-small'>Apple Inc.</span>
									<p className='item-description'>
										Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-sm-12 col-md-12 col-lg-12'>
						<div className='block'>
							<div className='center download-resume'>
								<a href='#' onClick={() => downloadCV()} className='btn btn-primary'>
									Télécharger mon CV
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
