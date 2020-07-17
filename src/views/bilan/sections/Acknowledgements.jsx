import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../../../components/Utils/BlockTitle";
import { Acknowledgements as MyAcknowledgements } from "../../../data";

export default function Acknowledgements() {
	return (
		<>
			<BlockTitle title='Remerciements' />

			<Row className='justify-content-center align-items-center'>
				{MyAcknowledgements
					? MyAcknowledgements.map((acknowledgement) => {
							return (
								<Col
									xs='12'
									md='4'
									className='px-0 px-md-2 mt-4 mt-md-0 d-flex align-items-stretch'
									key={acknowledgement.id}>
									<div className='flip'>
										<div
											className='front'
											style={{
												backgroundImage: `url(${acknowledgement.img})`,
											}}>
											<h1 className='text-shadow text-uppercase'>{acknowledgement.title}</h1>
										</div>
										<div className='back'>
											<h2>{acknowledgement.title}</h2>
											<p>{acknowledgement.description}</p>
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
