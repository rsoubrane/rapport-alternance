import React from "react";

//Reactstrap Components
import { Row } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";

export default function FunFacts() {
	return (
		<>
			<BlockTitle title='Fun Facts' />

			<Row>
				<div className=' col-xs-12 col-sm-3 '>
					<div id='col_inner_id-5efb526b04fe6' className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
						<div className='lm-info-block gray-default'>
							<i className='linecons linecons-heart'></i>
							<h4>Happy Clients</h4>
							<span className='lm-info-block-value'>578</span>
							<span className='lm-info-block-text'></span>
						</div>
					</div>
				</div>

				<div className=' col-xs-12 col-sm-3 '>
					<div id='col_inner_id-5efb526b05216' className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
						<div className='lm-info-block gray-default'>
							<i className='linecons linecons-clock'></i>
							<h4>Heures de travail</h4>
							<span className='lm-info-block-value'>1,350</span>
							<span className='lm-info-block-text'></span>
						</div>
					</div>
				</div>

				<div className=' col-xs-12 col-sm-3 '>
					<div id='col_inner_id-5efb526b053ab' className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
						<div className='lm-info-block gray-default'>
							<i className='linecons linecons-star'></i>
							<h4>Projets</h4>
							<span className='lm-info-block-value'>3</span>
							<span className='lm-info-block-text'></span>
						</div>
					</div>
				</div>

				<div className=' col-xs-12 col-sm-3 '>
					<div id='col_inner_id-5efb526b05559' className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
						<div className='lm-info-block gray-default'>
							<i className='linecons linecons-cup'></i>
							<h4>Cafés consommés</h4>
							<span className='lm-info-block-value'>1,237</span>
							<span className='lm-info-block-text'></span>
						</div>
					</div>
				</div>
			</Row>

			<div className='fw-divider-space' style={{ paddingTop: "20px" }}></div>
		</>
	);
}
