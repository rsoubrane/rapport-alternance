import React from "react";

//Components
import BlockTitle from "../../enterprise/components/BlockTitle";
import { Row, Col } from "reactstrap";

//Data
import { Testimonials as MyTestimonials } from "../../../variables";

export default function Testimonials() {
	return (
		<>
			<BlockTitle title='Témoignages' />

			<Row className='testimonials'>
				{MyTestimonials
					? MyTestimonials.map((x) => {
							return (
								<Col xs='12' md='6' className='px-0 px-md-2 '>
									<div className='testimonial-item'>
										<div className='testimonial-content'>
											<div className='testimonial-picture'>
												<img src={x.img} alt={x.name} />
											</div>

											<div className='testimonial-text'>
												<p>{x.testimony}</p>
											</div>

											<div className='testimonial-author-info'>
												<h5 className='testimonial-author'>{x.name}</h5>
												<p className='testimonial-firm'>{x.poste}</p>
											</div>

											<div className='testimonial-icon'>
												<i className='fa fa-quote-left'></i>
											</div>

											<div className='testimonial-icon-big'>
												<i className='fa fa-quote-right'></i>
											</div>
										</div>
									</div>
								</Col>
							);
					  })
					: null}
			</Row>
		</>
	);
}
