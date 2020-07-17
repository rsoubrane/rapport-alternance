import React, { useState } from "react";

//Utils
import { Route, Switch } from "react-router-dom";

//Components
import Header from "../components/Navbar";
import Footer from "../components/Footer";

//Pages
import PageHome from "./home";
import PageProfile from "./profile";
import PageEnterprise from "./enterprise";
import PageMissions from "./missions";
import PageBilan from "./bilan";

export default function Layout() {
	const [currentPage, setCurrentPage] = useState(1);

	const handleReturnPage = (newPage) => {
		setCurrentPage(newPage);
	};

	const switchPage = () => {
		switch (currentPage) {
			case 1:
				return <PageHome currentPage={currentPage} returnPage={handleReturnPage} />;
			case 2:
				return <PageProfile currentPage={currentPage} returnPage={handleReturnPage} />;
			case 3:
				return <PageEnterprise currentPage={currentPage} returnPage={handleReturnPage} />;
			case 4:
				return <PageMissions currentPage={currentPage} returnPage={handleReturnPage} />;
			case 5:
				return <PageBilan currentPage={currentPage} returnPage={handleReturnPage} />;
			default:
				return null;
		}
	};

	return (
		<Switch>
			<Route exact path='/'>
				<div
					className='page-container theme-style-dark animated transition-flip-in-right'
					data-animation='transition-flip-in-right'>
					<Header currentPage={currentPage} returnPage={handleReturnPage} />
					<div className='site-main'>
						<div className='single-page-content'>
							<div className='content-area'>
								<div className='fw-container'>{switchPage()}</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</Route>
		</Switch>
	);
}
