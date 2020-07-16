import React from "react";
import BlockTitle from "../../../components/Utils/BlockTitle";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Assets
import Project from "../../../assets/img/illustrations/project.svg";
import Code from "../../../assets/img/illustrations/code.svg";
import UI from "../../../assets/img/illustrations/ui.svg";

export default function Roles({ title }) {
	return (
		<>
			<BlockTitle title={title} />

			<Row className='services'>
				<Col xs='12' md='4' className='d-flex align-items-stretch'>
					<div className='icon-box icon-box-pink'>
						<div className='icon'>
							<img src={Project} className='img-fluid' alt='' />
						</div>
						<h4 className='title'>Compréhension du projet</h4>
						<p className='description'>
							Il était important que je comprenne bien la vision long terme du projet ainsi que les
							différents appels API pour être efficace sur le reste de mes missions.
						</p>
					</div>
				</Col>

				<Col xs='12' md='4' className='d-flex align-items-stretch'>
					<div className='icon-box icon-box-green'>
						<div className='icon'>
							<img src={UI} className='img-fluid' alt='' />
						</div>
						<h4 className='title'>Réflexions graphiques</h4>
						<p className='description'>
							Après avoir compris les tenants et aboutissants du projet il était important de ne pas
							foncer directement dans le développement et de proposer des wireframes et des maquettes.
						</p>
					</div>
				</Col>

				<Col xs='12' md='4' className='d-flex align-items-stretch'>
					<div className='icon-box icon-box-blue'>
						<div className='icon'>
							<img src={Code} className='img-fluid' alt='' />
						</div>
						<h4 className='title'>Développement front</h4>
						<p className='description'>
							Il m'était alors possible de m'exprimer sur ce qui est mon point fort: le développement. En
							utilisant React, Sass et parfois Redux, il fallait implémenter les designs sous forme de
							code.
						</p>
					</div>
				</Col>
			</Row>
		</>
	);
}
