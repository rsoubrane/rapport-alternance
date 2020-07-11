import React, { Component } from "react";

//Utils
import { Route, Switch } from "react-router-dom";

//Components
import Header from "../components/Navbar";
import Footer from "../components/Footer";

//Services
import { NotificationService } from "../services/NotificationService";

//Pages
import PageHome from "../views/pages/home";
import PageAbout from "../views/pages/profile";
import PageEnterprise from "../views/enterprise";
import PageMissions from "../views/pages/missions";
import PageBilan from "../views/free/bilan";
import PageTestimonials from "../views/free/testimonials";
import PageProfile from "../views/pages/profile";

class Admin extends Component {
	state = {
		currentPage: 3,
		loading: true,
	};

	componentDidMount() {
		NotificationService.call("success", "Bonjour", "Soyez le/la bienvenue !");
	}

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
			<Switch>
				<Route exact path='/'>
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
		);
	}
}

export default Admin;
