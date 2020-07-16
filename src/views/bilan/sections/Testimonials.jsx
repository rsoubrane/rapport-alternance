import React from "react";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";
import { Row, Col } from "reactstrap";

//Data
import { Testimonials as MyTestimonials } from "../../../variables";

export default function Testimonials() {
	return (
		<>
			<BlockTitle title='Témoignages' />

			<Row className='testimonials'>
				{MyTestimonials
					? MyTestimonials.map((testimonial) => {
							return (
								<Col xs='12' md='6' className='px-0 px-md-2' key={testimonial.id}>
									<div className='testimonial-item'>
										<div className='testimonial-content'>
											<div className='testimonial-picture'>
												<img src={testimonial.img} alt={testimonial.name} />
											</div>

											<div className='testimonial-text'>
												<p>{testimonial.testimony}</p>
											</div>

											<div className='testimonial-author-info'>
												<h5 className='testimonial-author'>{testimonial.name}</h5>
												<p className='testimonial-firm'>{testimonial.poste}</p>
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
