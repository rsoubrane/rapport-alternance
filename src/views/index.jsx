import React, { Component } from "react";

//Utils
import { Route, Switch } from "react-router-dom";

//Components
import Header from "../components/Navbar";
import Footer from "../components/Footer";

//Services
import { NotificationService } from "../services/NotificationService";

//Pages
import PageHome from "./home";
import PageProfile from "./profile";
import PageEnterprise from "./enterprise";
import PageMissions from "./pages/missions";
import PageBilan from "./pages/bilan";
import PageTestimonials from "./pages/testimonials";

class Admin extends Component {
	state = {
		currentPage: 2,
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
							className='page-container bg-move-effect theme-style-dark animated transition-flip-in-right'
							data-animation='transition-flip-in-right'>
							<Header currentPage={this.state.currentPage} returnPage={this.handleReturnPage} />
							<div className='site-main'>
								<div className='single-page-content'>
									<div className='content-area'>
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
