import React, { Component } from "react";

//Reactstrap Components
import { Container, Row, Col, Card, CardHeader, CardBody, Nav, NavItem, NavLink, Button } from "reactstrap";

//Redux
import { connect } from "react-redux";

// Tabs
import TabSummary from "./tabs/apprenticeship/summary";
import TabEnterprise from "./tabs/apprenticeship/enterprise";
import TabMissions from "./tabs/apprenticeship/missions";
import TabBilan from "./tabs/apprenticeship/bilan";
import TabTestimonials from "./tabs/apprenticeship/testimonials";
import TabPresentation from "./tabs/student/presentation";
import TabResume from "./tabs/student/resume";

//Icons
import { FaChevronLeft as Left, FaChevronRight as Right } from "react-icons/fa";

class TabHome extends Component {
	state = {
		currentMode: this.props.currentMode,
		productPage: 1,
		active: 1,
		shop_id: 13,
		user: { role: "admin" },
	};

	componentDidUpdate(prevProps) {
		if (prevProps.currentMode !== this.props.currentMode) this.setState({ currentMode: this.props.currentMode });
	}

	getQuantity = (product) => {
		return 100;
	};

	toggleNavs = (tab) => {
		this.setState({
			active: tab,
		});
	};

	handleSwitchPage = () => {
		if (this.state.productPage === 1) this.setState({ productPage: 2 });
		else this.setState({ productPage: 1 });
	};

	switchProductPage = () => {
		switch (this.state.productPage) {
			case 1:
				return this.props.products.map((product) => {
					if (!product.ipe) {
						return (
							<Col md={3} key={product.id} className='d-none d-md-block container-products px-2'>
								<h4 className='pl-3'>
									{this.getQuantity(product)}
									<i className={"pl-3 icon icon-" + product.icon} />
								</h4>
								<h6 className='pl-3'>{product.name}</h6>
							</Col>
						);
					} else return null;
				});
			case 2:
				return this.props.products.map((product) => {
					if (product.ipe) {
						return (
							<Col md={3} key={product.id} className='d-none d-md-block container-products px-2'>
								<h4 className='pl-3'>
									{this.getQuantity(product)}
									<i className={"pl-3 icon icon-" + product.icon} />
								</h4>
								<h6 className='pl-3'>{product.name}</h6>
							</Col>
						);
					} else return null;
				});
			default:
				break;
		}
	};

	switchTab = () => {
		if (this.state.currentMode === 1) {
			switch (this.state.active) {
				case 1:
					return <TabSummary user={this.state.user} shop_id={this.state.shop_id} />;
				case 2:
					return <TabEnterprise shop_id={this.state.shop_id} />;
				case 3:
					return <TabMissions shop_id={this.state.shop_id} />;
				case 4:
					return <TabBilan shop_id={this.state.shop_id} />;
				case 5:
					return <TabTestimonials shop_id={this.state.shop_id} />;
				default:
					return null;
			}
		} else {
			switch (this.state.active) {
				case 1:
					return <TabPresentation shop_id={this.state.shop_id} />;
				case 2:
					return <TabResume shop_id={this.state.shop_id} />;
				default:
					return null;
			}
		}
	};

	switchTabContent = () => {
		if (this.state.currentMode === 1) {
			return (
				<>
					<NavItem>
						<NavLink className={this.state.active === 1 ? "active" : ""} onClick={() => this.toggleNavs(1)}>
							Le Résumé
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={this.state.active === 2 ? "active" : ""} onClick={() => this.toggleNavs(2)}>
							L'entreprise
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={this.state.active === 3 ? "active" : ""} onClick={() => this.toggleNavs(3)}>
							Les missions
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={this.state.active === 4 ? "active" : ""} onClick={() => this.toggleNavs(4)}>
							Le Bilan
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={this.state.active === 5 ? "active" : ""} onClick={() => this.toggleNavs(5)}>
							Les Témoignages
						</NavLink>
					</NavItem>
				</>
			);
		} else {
			return (
				<>
					<NavItem>
						<NavLink className={this.state.active === 1 ? "active" : ""} onClick={() => this.toggleNavs(1)}>
							Présentation
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={this.state.active === 3 ? "active" : ""} onClick={() => this.toggleNavs(3)}>
							CV
						</NavLink>
					</NavItem>
				</>
			);
		}
	};

	render() {
		return (
			<Container fluid className='view-container'>
				<div
					className='header d-flex align-items-center'
					style={{
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}>
					<span className='mask bg-gradient-default opacity-7' />
					<Container className='align-items-center' fluid>
						<Row className='justify-content-center align-items-center'>
							<Col xs={12} md={4} className='pb-5'>
								<div className='sub_title'>Rapport d'Alternance</div>
								<h1 className='display-3 text-white'>Free Distribution</h1>
							</Col>
							<Col md={1} className='d-none d-md-block'>
								<Button
									className='float-right'
									onClick={() => {
										this.handleSwitchPage();
									}}>
									<Left />
								</Button>
							</Col>

							<Col xs={12} md={6}>
								<Row className='mb-5'>{this.switchProductPage()}</Row>
							</Col>

							<Col md={1} className='d-none d-md-block'>
								<Button
									onClick={() => {
										this.handleSwitchPage();
									}}>
									<Right />
								</Button>
							</Col>
						</Row>
					</Container>
				</div>
				<Row>
					<Col xs={{ size: 10, offset: 1 }}>
						<Card className='card-main shadow'>
							<CardHeader className='border-0'>
								<Nav className='nav-fill flex-column flex-md-row' id='tabs-menu' pills role='tablist'>
									{this.switchTabContent()}
								</Nav>
							</CardHeader>
							<CardBody className='main'>{this.switchTab()}</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps)(TabHome);
