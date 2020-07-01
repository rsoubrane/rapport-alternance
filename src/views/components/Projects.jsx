import React from "react";
import { Row, Col } from "reactstrap";

export default function Projects() {
	return (
		<div className='row'>
			<div className='col-xs-12 col-sm-12 '>
				<div className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
					<div className='fw-divider-space' style={{ paddingTop: "20px" }}></div>

					<div className='block-title'>
						<h2>Projets</h2>
					</div>

					<div className='clients owl-carousel owl-loaded owl-drag'>
						<div className='owl-stage-outer'>
							<Row
								className='owl-stage'
								style={{
									transition: "all 0.25s ease 0s",
								}}>
								<Col
									xs='6'
									md='3'
									className='owl-item active'
									style={{ width: "294px", marginRight: "10px;" }}>
									<div className='client-block'>
										<a href='#' target='_blank' title='Golden Grid'>
											<img
												src='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/goldengrid.png'
												alt='Golden Grid'
											/>
										</a>
									</div>
								</Col>
								<Col
									xs='6'
									md='3'
									className='owl-item active'
									style={{ width: "294px", marginRight: "10px;" }}>
									<div className='client-block'>
										<a href='#' target='_blank' title='Sweety'>
											<img
												src='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/sweety.png'
												alt='Sweety'
											/>
										</a>
									</div>
								</Col>
								<Col
									xs='6'
									md='3'
									className='owl-item active'
									style={{ width: "294px", marginRight: "10px;" }}>
									<div className='client-block'>
										<a href='#' target='_blank' title='Magic Furnitures'>
											<img
												src='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/Magic-Furnitures-1.png'
												alt='Magic Furnitures'
											/>
										</a>
									</div>
								</Col>
								<Col
									xs='6'
									md='3'
									className='owl-item active'
									style={{ width: "294px", marginRight: "10px;" }}>
									<div className='client-block'>
										<a href='#' target='_blank' title='LifeGuard'>
											<img
												src='//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/lifeguard.png'
												alt='LifeGuard'
											/>
										</a>
									</div>
								</Col>
							</Row>
						</div>
					</div>

					<div className='fw-divider-space' style={{ paddingTop: "20px" }}></div>
				</div>
			</div>
		</div>
	);
}
