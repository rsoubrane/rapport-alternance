import React, { Component } from "react";

//Utils
import { Route, Switch } from "react-router-dom";

//Components
import SplashScreen from "../components/Loaders/SplashScreen";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

//Redux
import { connect } from "react-redux";

//Services
import { NotificationService } from "../services/NotificationService";
import { getProducts } from "../services/DataService";

//Pages
import PageHome from "../views/pages/home";
import PageAbout from "../views/pages/profile";
import PageEnterprise from "../views/pages/enterprise";
import PageMissions from "../views/free/missions";
import PageBilan from "../views/free/bilan";
import PageTestimonials from "../views/free/testimonials";
import PageProfile from "../views/pages/profile";

class Admin extends Component {
	state = {
		currentPage: 3,
		loading: true,
		products: "",
	};

	componentDidMount() {
		this.fetchData();
		this.setState({ loading: false });
		NotificationService.call("success", "Récuperation de la config", "Config récupérée avec succès");
	}

	fetchData = async () => {
		try {
			const products = await getProducts();
			this.setState({ products });
		} catch (error) {
			console.log(error);
			NotificationService.call("danger", "Récuperation de la config", "Une erreur Api est survenue");
		}
	};

	handleReturnPage = (newPage) => {
		this.setState({ currentPage: newPage });
	};

	switchPage = () => {
		switch (this.state.currentPage) {
			case 1:
				return <PageHome currentPage={this.state.currentPage} returnPage={this.handleReturnPage} />;
			case 2:
				return <PageProfile currentPage={this.state.currentPage} returnPage={this.handleReturnPage} />;
			case 3:
				return <PageEnterprise currentPage={this.state.currentPage} returnPage={this.handleReturnPage} />;
			case 4:
				return <PageMissions currentPage={this.state.currentPage} returnPage={this.handleReturnPage} />;
			case 5:
				return <PageBilan currentPage={this.state.currentPage} returnPage={this.handleReturnPage} />;
			case 6:
				return <PageTestimonials currentPage={this.state.currentPage} returnPage={this.handleReturnPage} />;
			default:
				return null;
		}
	};

	render() {
		return (
			<SplashScreen isVisible={this.state.loading}>
				<Switch>
					<Route exact path={"/"}>
						<div className='page-scroll'>
							<div
								id='page_container'
								className='page-container bg-move-effect theme-style-dark animated transition-flip-in-right'
								data-animation='transition-flip-in-right'>
								<Header currentPage={this.state.currentPage} returnPage={this.handleReturnPage} />
								<div id='main' className='site-main'>
									<div id='main-content' className='single-page-content'>
										<div id='primary' className='content-area'>
											<div className='fw-container'>{this.switchPage()}</div>
										</div>
									</div>
								</div>
								<Footer />
							</div>
						</div>
					</Route>
				</Switch>
			</SplashScreen>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		global: state.currentPage,
	};
};

export default connect(mapStateToProps)(Admin);
